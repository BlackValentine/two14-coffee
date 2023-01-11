/** @format */

import { configureStore } from '@reduxjs/toolkit';
import generalReducer from "./reducers/generalSlice";
import productReducer from "./reducers/productSlice";

export const store = configureStore({
	reducer: {
		general: generalReducer,
		product: productReducer,
	},
});
