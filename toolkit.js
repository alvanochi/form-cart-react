import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(
    addToCart,
    (state, action) => (state = [...state, action.payload])
  );
});

const login = createAction("CREATE_SESSION");

const loginState = false;

const loginReducer = createReducer(loginState, (builder) => {
  builder.addCase(login, (state) => (state = { status: true }));
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("onchange store : ", store.getState());
});
store.dispatch(addToCart({ id: 1, qty: 2 }));
store.dispatch(addToCart({ id: 2, qty: 5 }));

const actionLogin = login();
store.dispatch(actionLogin);
