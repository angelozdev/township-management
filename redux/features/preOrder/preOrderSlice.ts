import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreOrderState {
  crops: { [id: string]: Omit<Crop, "id"> };
}

const initialState: PreOrderState = {
  crops: {},
};

export const preOrderSlice = createSlice({
  name: "preOrder",
  initialState,
  reducers: {
    addCrop: (state, { payload }: PayloadAction<PreOrderState["crops"]>) => {
      state.crops = { ...state.crops, ...payload };
    },
    removeCrop: (state, { payload }: PayloadAction<Crop["id"]>) => {
      delete state.crops[payload];
    },
  },
});

export const { addCrop, removeCrop } = preOrderSlice.actions;

export default preOrderSlice.reducer;
