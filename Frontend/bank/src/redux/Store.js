import { configureStore } from '@reduxjs/toolkit';
import connexion from './reduceur/Loginreduceur'; 

const store = configureStore({
  reducer: {
    login: connexion, 
  },
});

export default store;