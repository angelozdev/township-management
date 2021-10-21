import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreOrderState {
  products: Crop[];
}

const initialState: PreOrderState = {
  products: [],
};

export const preOrderSlice = createSlice({
  name: "preOrder",
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<Crop>) => {
      state.products.push(payload);
    },
  },
});

export const { addProduct } = preOrderSlice.actions;

export default preOrderSlice.reducer;
