import { legacy_createStore } from "redux";

//memakai legacy karna createStore sudah tidak digunakan lg

//reducer
const cartReducer = (
  state = {
    // login : false
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    default:
      return state;
  }
};

//store
const store = legacy_createStore(cartReducer);
console.log("oncreate store : ", store.getState());

//subscribe
store.subscribe(() => {
  console.log("onchange store : ", store.getState());
});

//dispatch
//payload : data yang di berikan
const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 1,
    qty: 2,
  },
};

store.dispatch(action1);

const action2 = {
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    qty: 4,
  },
};

store.dispatch(action2);
