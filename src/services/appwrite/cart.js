import conf from "../../conf/conf.js";
import { Client, Databases, ID, Query } from "appwrite";

export class CartService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
    }

    // Add item to cart
    async addToCart({ user_id, product_id, quantity, created_at }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.cartItemsAppwriteCollectionId,
                ID.unique(),
                {
                    user_id,
                    product_id,
                    quantity,
                    created_at,
                }
            );
        } catch (error) {
            console.error("Appwrite :: addToCart error", error);
            return null;
        }
    }

    // Get cart items of a user
    async getCartItems(user_id) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.cartItemsAppwriteCollectionId,
                [Query.equal("user_id", user_id)]
            );
        } catch (error) {
            console.error("Appwrite :: getCartItems error", error);
            return null;
        }
    }

    // Update cart item quantity
    async updateCartItem(cartItemId, { user_id, product_id, quantity, created_at }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.cartItemsAppwriteCollectionId,
                cartItemId,
                { user_id, product_id, quantity, created_at }
            );
        } catch (error) {
            console.error("Appwrite :: updateCartItem error", error);
            return null;
        }
    }

    // Remove single item from cart
    async deleteCartItem(cartItemId, { user_id, product_id }) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.cartItemsAppwriteCollectionId,
                cartItemId,
                { user_id, product_id }
            );
            return true;
        } catch (error) {
            console.error("Appwrite :: deleteCartItem error", error);
            return false;
        }
    }
}

const cartService = new CartService();
export default cartService;