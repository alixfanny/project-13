import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pending: false,
  success: false,
  failure: false,
  action: null,
  token: null,
  isAuthenticated: false,
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
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
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
  logout,
} = loginSlice.actions;

export default loginSlice.reducer;