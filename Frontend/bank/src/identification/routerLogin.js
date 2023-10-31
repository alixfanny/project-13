import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';

const LoginRouter = () => { 
    return (
        <Routes> 
            <Route index element={<Login />} />
            <Route path="SignIn" element={<Login />} /> 
        </Routes>
    )
}

export default LoginRouter