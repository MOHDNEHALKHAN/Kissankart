import conf from "../../conf/conf.js";
import { Client, Databases, ID, Query } from "appwrite";

export class OrderService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
  }

  // Create a new order by buyer
  async createOrder({ user_id, total, status, created_at, address, payment_id }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.orderAppwriteCollectionId,
        ID.unique(),
        {
          user_id,
          total,
          status,
          created_at,
          address,
          payment_id,
        }
      );
    } catch (error) {
      console.error("Appwrite :: createOrder error", error);
      return null;
    }
  }

  // Get all orders of a buyer
  async getOrder(buyer_id) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.orderAppwriteCollectionId,
        [Query.equal("buyer_id", buyer_id), Query.orderDesc("$createdAt")]
      );
    } catch (error) {
      console.error("Appwrite :: getOrdersByBuyer error", error);
      return null;
    }
  }

  // Get all orders of a seller
  async getOrders(seller_id) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.orderItemsAppwriteCollectionId,
        [Query.equal("products_id.seller_id", seller_id)]
      );
    } catch (error) {
      console.error("Appwrite :: getOrdersBySeller error", error);
      return null;
    }
  }

  // Get order by ID
  async getOrderById(orderId) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.orderAppwriteCollectionId,
        orderId
      );
    } catch (error) {
      console.error("Appwrite :: getOrderById error", error);
      return null;
    }
  }

  // Update order status by seller
  async updateOrderStatus(orderId, { status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.orderAppwriteCollectionId,
        orderId,
        { status }
      );
    } catch (error) {
      console.error("Appwrite :: updateOrderStatus error", error);
      return null;
    }
  }
}

const orderService = new OrderService();
export default orderService;