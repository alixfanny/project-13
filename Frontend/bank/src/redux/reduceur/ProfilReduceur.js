/*import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pending: false,
  success: false,
  failure: false,
  profileData: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profilePending: (state) => {
      state.pending = true;
    },
    profileSuccess: (state, action) => {
      state.success = true;
      state.profileData = action.payload;
    },
    profileFailure: (state) => {
      state.failure = true;
    },
    clearProfileState: (state) => {
      state.pending = false;
      state.success = false;
      state.failure = false;
      state.profileData = null;
    },
  },
});

export const {
  profilePending,
  profileSuccess,
  profileFailure,
  clearProfileState,
} = profileSlice.actions;

export default profileSlice.reducer;*/