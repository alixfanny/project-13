import { loginSuccess } from '../redux/reduceur/Loginreduceur';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/component/connexion.css';
import { datas } from '../services/CallApi';
import axios from 'axios';

function Login () {
  const navigate = useNavigate();
  const [data, setData] = useState({email:'', password:''});
  const dispatch = useDispatch();

  const recuperationData = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault(); 
    datas.login(data)
      .then((response) => {
        dispatch(loginSuccess(data));
        response = JSON.parse(response.request.response);
        localStorage.setItem("token", response.body.token);
        axios.defaults.headers["Authorization"] = "Bearer " + response.body.token;
	      navigate('/profile');
      })
      .catch((error) => {
        console.error('Erreur de connexion :', error);
      });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name='email' value={data.email} onChange={recuperationData}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' value={data.password} onChange={recuperationData}/>
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
}

export default Login