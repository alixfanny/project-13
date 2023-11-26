import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './reduceur/Loginreduceur';
import profileSlice  from './reduceur/ProfilReduceur';

const store = configureStore({
  reducer: {
    login: loginSlice,
    profile: profileSlice,
  },
});
export default store;