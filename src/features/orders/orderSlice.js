import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [], // fetched orders for buyer or seller
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    }
  }
});

export const { setOrders, addOrder } = orderSlice.actions;
export default orderSlice.reducer;