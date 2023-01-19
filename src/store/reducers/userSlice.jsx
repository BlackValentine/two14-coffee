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
        const user = action.payload.user;
				state.user = user;
        localStorage.setItem('user', JSON.stringify(user))
			}
    }
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
