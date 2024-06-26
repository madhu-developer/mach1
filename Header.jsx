import React from 'react'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import palnies_logo from './Assets/palniESlogo.png';

export const Header = () => {
  return (
    <div className="topnav-section">
    <img src={palnies_logo} alt="palnies-logo" width="150"/>
    <div className="search-and-profile-section">
    <div className="search-box-section">
    <input type="search" placeholder="Search" className="search-box"/>
    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
    </div>
    <div className="profile-section">
    <FontAwesomeIcon icon={faCircleUser} className="profile-icon" width="60" />
    <h4>Admin</h4>
    <div className="dropdown" style={{ float: "right" }}>
    <FontAwesomeIcon icon={faAngleDown} className="dropbtn"/>
    <div className="dropdown-content">
      <a href="#profile">Profile </a>
      <a href="#settings">Settings</a>
      <a href="#logout">Log Out</a>
    </div>
  </div>
    </div>
    </div>
    </div>
  )
}
