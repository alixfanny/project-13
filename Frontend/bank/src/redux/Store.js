import { configureStore } from '@reduxjs/toolkit';
import connexion from './reduceur/Loginreduceur';
import profil from './reduceur/ProfilReduceur';

const store = configureStore({
  reducer: {
    login: connexion,
    profile: profil,
  },
});

export default store;