const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    productAppwriteCollectionId: String(import.meta.env.VITE_PRODUCT_APPWRITE_COLLECTION_ID),
    orderAppwriteCollectionId: String(import.meta.env.VITE_ORDER_APPWRITE_COLLECTION_ID),
    orderItemsAppwriteCollectionId: String(import.meta.env.VITE_ORDERITEMS_APPWRITE_COLLECTION_ID),
    cartItemsAppwriteCollectionId: String(import.meta.env.VITE_CARTITEMS_APPWRITE_COLLECTION_ID),
    paymentAppwriteCollectionId: String(import.meta.env.VITE_PAYMENT_APPWRITE_COLLECTION_ID),
    wishlistAppwriteCollectionId: String(import.meta.env.VITE_WISHLIST_APPWRITE_COLLECTION_ID),
}

export default conf