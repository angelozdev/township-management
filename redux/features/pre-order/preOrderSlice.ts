import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreOrderState {
  products: Crops;
}

const initialState: PreOrderState = {
  products: {},
};

export const preOrderSlice = createSlice({
  name: "preOrder",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<Crops>) => {
      state.products = { ...state.products, ...payload };
    },
    removeProduct: (
      state,
      { payload }: PayloadAction<CropFromServer["id"]>
    ) => {
      delete state.products[payload];
    },
  },
});

export const { addProduct, removeProduct } = preOrderSlice.actions;

export default preOrderSlice.reducer;
