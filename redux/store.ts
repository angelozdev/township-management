import { configureStore } from "@reduxjs/toolkit";
import preOrderReducer from "./features/pre-order/preOrderSlice";

const store = configureStore({
  reducer: {
    preOrder: preOrderReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

export default store;
