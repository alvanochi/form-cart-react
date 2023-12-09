import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("onchange store : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 2 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 2 }));
