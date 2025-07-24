import conf from '../../conf/conf.js';
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class ProductService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    //Create a new Product by a seller
    async createProduct({ title, description, price, quantity, category, image, seller_id}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.productAppwriteCollectionId,
                ID.unique(),
                { title, description, price, quantity, category, image, seller_id}
            );

        } catch (error) {
            console.error("Error creating product:", error);
            return null;
        }
    }

    //Get all the products
    async getProducts() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.productAppwriteCollectionId
            );
        } catch (error) {
            console.error("Error fetching products:", error);
            return null;
        }
    }

    // Get products by seller_id
    async getProductsBySeller(seller_id) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.productAppwriteCollectionId,
                [Query.equal("seller_id", seller_id)]
            );
        } catch (error) {
            console.error("Error fetching products by seller:", error);
            return null;
        }
    }

    //Get a product by its ID
    async getProductById(productId) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.productAppwriteCollectionId,
                productId
            );

        } catch (error) {
            console.error("Error fetching product by ID:", error);
            return null;
        }
    }

    //Update a product by its ID
    async updateProduct(productId ,{title, description, price, quantity, category, image, seller_id }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.productAppwriteCollectionId,
                productId,
                { title, description, price, quantity, category, image, seller_id }
            );

        } catch (error) {
            console.error("Error updating product:", error);
            return null;
        }
    }

    //Delete a product by its ID
    async deleteProduct(productId) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.productAppwriteCollectionId,
                productId
            )
        } catch (error) {
            console.error("Error deleting product:", error);
            return null;
        }
    }

    //Upload product image
    async uploadImage(image){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                image
            );
        } catch (error) {
            console.error("Error uploading image:", error);
            return null;
            
        }
    }

     async deleteImage(imageId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                imageId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteImage :: error", error);
            return false
        }
    }

    getImagePreview(imageId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            imageId
        )
    }

}

const productService = new ProductService();
export default productService;