import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import User from '../pages/user';
import EditUserName from '../pages/editUserName';
import { profileSuccess } from '../redux/reduceur/ProfilReduceur';
import { datas } from '../services/CallApi';

const ProfilRouter = () => { 

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const isAuthenticated = () => {
        return localStorage.getItem('token') != null;
    };

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/sign-in');
        } else {
            datas.username()
            .then((response) => {
                dispatch(profileSuccess(response.data.body));
            })
            .catch((error) => {
                console.error('Erreur de connexion :', error);
            });
        }
    }, [dispatch, navigate]); 

    return (
        <Routes> 
            {isAuthenticated() && (
                <>
                    <Route index element={<User />} />
                    <Route path="ModificationProfil" element={<EditUserName />} />
                </>
            )}
        </Routes>
    )
}

export default ProfilRouter;