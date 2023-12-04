import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import User from '../pages/user';
import EditUserName from '../pages/editUserName';
import { profileSuccess } from '../redux/reduceur/ProfilReduceur';
import { datas } from '../services/CallApi';

const ProfilRouter = () => { 

    const dispatch = useDispatch();
  
    useEffect(() => {
     datas.username()
      .then((response) => {
      dispatch(profileSuccess(response.data.body));
      })
      .catch((error) => {
      console.error('Erreur de connexion :', error);
      });
    }, [dispatch]); 

    return (
        <Routes> 
            <Route index element={<User />} />
            <Route path="ModificationProfil" element={<EditUserName />} /> 
        </Routes>
    )
}

export default ProfilRouter