import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../functions/auth/authSlice";
import cartSlice from "../functions/cart/cartSlice";
import productSlice from "../functions/products/productSlice";
import orderSlice from "../functions/orders/orderSlice"; 
import wishlistSlice from "../functions/wishlist/wishlistSlice"; 

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    products: productSlice,
    orders: orderSlice,
    wishlist: wishlistSlice,
  }
});

export default store;