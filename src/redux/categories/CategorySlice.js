import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: null,
  reducers: {
    checkStatus: (state, action) => ({
      ...state,
      msg: action.payload,
    }),
  },
});

export const { checkStatus } = categorySlice.actions;

export const allCategories = (state) => state.category;

export default categorySlice.reducer;
