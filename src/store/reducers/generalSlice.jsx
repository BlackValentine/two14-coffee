/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowCheckoutPopup: false,
  cart: [],
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setIsShowCheckoutPopup: (state, action) => {
      state.isShowCheckoutPopup = action.payload;
    },
    setCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      console.log(state.cart);
			console.log(state.cart.find(item => item.type === action.payload.type))
      // const cartClone = [...state.cart]
      // console.log(cartClone)

      // state.cart.forEach((cartItem, index) => {
      // 	console.log(cartItem)
      // 	// if (action.payload.type === cartItem.type) {
      // 	// 	console.log(index)
      // 	// 	cartClone[index].quantity = cartClone[index].quantity + +(action.payload.quantity)
      // 	// 	state.cart = [...cartClone]
      // 	// } else {
      // 	// 	console.log('not exist')
      // 	// }
      // })
    },
  },
});

export const { setIsShowCheckoutPopup, setCart } = generalSlice.actions;
export default generalSlice.reducer;
