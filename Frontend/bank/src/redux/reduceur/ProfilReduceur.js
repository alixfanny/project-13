import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pending:false,
  isLogged: false,
  success: false,
  failure: false,
  profileData: " ",
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profilePending: (state) => {
      state.pending = true;
    },
    profileSuccess: (state, action) => {
      state.isLogged = true;
      state.success = true;
      state.profileData = action.payload;
    },
    profileFailure: (state) => {
      state.isLogged = false;
      state.failure = true;
    },
    clearProfileState: (state) => {
      state.isLogged = false;
      state.pending = false;
      state.success = false;
      state.failure = false;
      state.profileData = " ";
    },
  },
});

export const {
  profilePending,
  profileSuccess,
  profileFailure,
  clearProfileState,
} = profileSlice.actions;

export default profileSlice.reducer;