import conf from "../../conf/conf.js";
import { Client, Databases, ID, Query } from "appwrite";

export class WishlistService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
  }

  // Add product to wishlist
  async addToWishlist({ user_id, product_id }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.wishlistAppwriteCollectionId,
        ID.unique(),
        {
          user_id,
          product_id,
        }
      );
    } catch (error) {
      console.error("Appwrite :: addToWishlist error", error);
      return null;
    }
  }

  // Get all wishlist items of a user
  async getWishlistByUser(user_id) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.wishlistAppwriteCollectionId,
        [Query.equal("user_id", user_id)]
      );
    } catch (error) {
      console.error("Appwrite :: getWishlistByUser error", error);
      return null;
    }
  }

  // Remove a product from wishlist
  async removeFromWishlist(wishlistId) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.wishlistAppwriteCollectionId,
        wishlistId
      );
      return true;
    } catch (error) {
      console.error("Appwrite :: removeFromWishlist error", error);
      return false;
    }
  }
}

const wishlistService = new WishlistService();
export default wishlistService;