import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { recuperationData, handleLogin } from '../components/Login'; 
import '../css/component/connexion.css';

const LoginPage = () => {
  const [data, setData] = useState({email:'', password:''});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDataChange = recuperationData(data,setData);
  const onLogin = handleLogin(data, dispatch, navigate);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <h1>Sign In</h1>
        <form onSubmit={onLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name='email' value={data.email} onChange={onDataChange}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' value={data.password} onChange={onDataChange}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
