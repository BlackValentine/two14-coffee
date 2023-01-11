/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isShowCheckoutPopup: false,
};

export const generalSlice = createSlice({
	name: 'general',
	initialState,
	reducers: {
		setIsShowCheckoutPopup: (state, action) => {
			state.isShowCheckoutPopup = action.payload;
		},
	},
});

export const { setIsShowCheckoutPopup } = generalSlice.actions;
export default generalSlice.reducer;
