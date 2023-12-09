import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("Cart")) || [],
  },
  reducers: {
    addToCart(state, action) {
      const product = state.data.find((item) => item.id === action.payload.id);
      if (product) {
        product.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
