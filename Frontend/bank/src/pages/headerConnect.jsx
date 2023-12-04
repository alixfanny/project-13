import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/pages/header.css";
import logo from "../images/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Header() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const state = useSelector(state => state.profile.profileData)
  const navigate = useNavigate();

  useEffect(() => {
    if(state.firstName) {
      setFirstName(state.firstName)
      setLastName(state.lastName)
    }
    return() => {
      //
    };
  }, [state])

  function logout () {
    localStorage.removeItem("token");
    axios.defaults.headers["Authorization"] = "";
	  navigate('/sign-in');
  }

    return (
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="./">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div className='menu'>
            <div className='user-identify'>
            <NavLink to={""} className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} className='logo-sign' />
                {firstName} {lastName}
            </NavLink>
            </div>
            <div className='sign-out'>
            <div className="main-nav-item" onClick={logout}>
            <FontAwesomeIcon icon={faRightFromBracket} className='logo-sign' />
              Sign Out
            </div>
            </div>
        </div>
      </nav>
    );
}
  
export default Header;