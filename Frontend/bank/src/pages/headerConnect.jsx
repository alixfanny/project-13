import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/pages/header.css";
import logo from "../images/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const state = useSelector(state => state.profile.profileData)

  useEffect(() => {
    if(state.firstName) {
      setFirstName(state.firstName)
      setLastName(state.lastName)
    }
    return() => {
      //
    };
  }, [state])

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
            <NavLink to={"/"} className="main-nav-item">
            <FontAwesomeIcon icon={faRightFromBracket} className='logo-sign' />
                Sign Out
            </NavLink>
            </div>
        </div>
      </nav>
    );
}
  
export default Header;