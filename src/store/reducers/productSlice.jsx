/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { getAllCoffee } from '../api';

const initialState = {
  allCoffeeProducts: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCoffee.fulfilled]: (state, action) => {
      if (action.payload.errCode === 0) {
				state.allCoffeeProducts = action.payload.products;
			}
    },
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
