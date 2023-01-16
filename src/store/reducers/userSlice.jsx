/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { login } from '../api';

const initialState = {
  user: {}
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      if (action.payload.errCode === 0) {
				state.user = action.payload.user;
        console.log(action.payload.user)
			}
    }
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
