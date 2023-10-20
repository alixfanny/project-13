import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/pages/header.css";
import logo from "../images/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


function Header() {
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
      <div>
        <NavLink to={"/sign-in"} className="main-nav-item">
        <FontAwesomeIcon icon={faUserCircle} className='logo-sign-in' />
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;