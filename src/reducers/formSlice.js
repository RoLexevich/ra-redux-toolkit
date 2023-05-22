import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
};



export const  numberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    change: (state, action) => {
      state.number = action.payload;
    }
  }
});

export const { change } = numberSlice.actions;

export const selectNumber = (state) => state.number.number;


export default numberSlice.reducer;
