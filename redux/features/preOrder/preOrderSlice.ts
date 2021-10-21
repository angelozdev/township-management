import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreOrderState {
  crops: Crops;
}

const initialState: PreOrderState = {
  crops: {},
};

export const preOrderSlice = createSlice({
  name: "preOrder",
  initialState,
  reducers: {
    addCrop: (state, { payload }: PayloadAction<Crops>) => {
      state.crops = { ...state.crops, ...payload };
    },
    removeCrop: (state, { payload }: PayloadAction<CropFromServer["id"]>) => {
      delete state.crops[payload];
    },
  },
});

export const { addCrop, removeCrop } = preOrderSlice.actions;

export default preOrderSlice.reducer;
