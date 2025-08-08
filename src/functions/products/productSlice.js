import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    allproducts: (state, action) => {
      state.allProducts = action.payload;
    },
    addproduct: (state, action) => {
      state.allProducts.push(action.payload);
    },
    deleteproduct: (state, action) => {
      state.allProducts = state.allProducts.filter(
        p => p.$id !== action.payload
      );
    },
  },
});

export const { allproducts, addproduct, deleteproduct } = productSlice.actions;
export default productSlice.reducer;