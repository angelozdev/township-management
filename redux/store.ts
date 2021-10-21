import { configureStore } from "@reduxjs/toolkit";
import preOrderReducer from "./features/preOrder/preOrderSlice";

const store = configureStore({
  reducer: {
    preOrder: preOrderReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  console.log({ ...state.preOrder.crops });
});

export default store;
