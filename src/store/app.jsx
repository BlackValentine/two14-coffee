/** @format */

import { configureStore } from '@reduxjs/toolkit';
import generalReducer from "./reducers/generalSlide"

export const store = configureStore({
	reducer: {
		general: generalReducer,
	},
});
