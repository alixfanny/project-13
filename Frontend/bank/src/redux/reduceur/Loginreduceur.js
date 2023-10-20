import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pending: false,
  success: false,
  failure: false,
  action: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.success = true;
      state.action = action.payload;
    },
    loginFailure: (state) => {
      state.failure = true;
    },
    clearLoginState: (state) => {
      state.pending = false;
      state.success = false;
      state.failure = false;
      state.action = null;
    },
  },
});

export const {
  loginPending,
  loginSuccess,
  loginFailure,
  clearLoginState,
} = loginSlice.actions;

export default loginSlice.reducer;