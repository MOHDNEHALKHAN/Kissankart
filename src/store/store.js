import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import cartSlice from "../features/cart/cartSlice";
import productSlice from "../features/products/productSlice";
import orderSlice from "../features/orders/orderSlice"; 
import wishlistSlice from "../features/wishlist/wishlistSlice"; 

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