/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { getAllApparel, getAllCoffee } from '../api';

const initialState = {
  allCoffeeProducts: [],
  allApparelProducts: []
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
    [getAllApparel.fulfilled]: (state, action) => {
      if (action.payload.errCode === 0) {
				state.allApparelProducts = action.payload.products;
			}
    }
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
