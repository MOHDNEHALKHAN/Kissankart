import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  sellerProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setSellerProducts: (state, action) => {
      state.sellerProducts = action.payload;
    },
    addProduct: (state, action) => {
      state.sellerProducts.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.sellerProducts = state.sellerProducts.filter(
        p => p.$id !== action.payload
      );
    },
  },
});

export const { setAllProducts, setSellerProducts, addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;