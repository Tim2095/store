import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  items: [],
  totalPrice: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.amount++
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          price: newItem.price,
          amount: newItem.amount
        });
        state.totalAmount++
      }
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.amount, 0)
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
