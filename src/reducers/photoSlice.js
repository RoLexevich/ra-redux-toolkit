import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = {
  photo: [],
  selected: "",
};

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    change: (state, action) => {
      state.photo.push({ id: nanoid(), src: action.payload });
    },
    select: (state, action) => {
      state.selected = URL.createObjectURL(action.payload);
    },
  },
});

export const { change, select } = photoSlice.actions;

export const selectPhoto = (state) => state.photo.selected;

export const selectPhotos = (state) => state.photo.photo;

export default photoSlice.reducer;
