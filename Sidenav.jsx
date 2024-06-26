import React, { useState } from "react";
import './Sidenav.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faCubes, faPeopleGroup, faScrewdriverWrench, faFlag, faFileInvoiceDollar, faRectangleList } from '@fortawesome/free-solid-svg-icons';


export const Sidenav = () => {
  const [openNav,setOpenNav] = useState(false);
  const toggleNav = () =>{
    setOpenNav(!openNav);
  }

  return (
    <div className="sidenav-section" style={{"width":openNav? "160px": "45px"}}>
    <div className="logo-section">
    {openNav?<FontAwesomeIcon icon={faAlignLeft} alt="palnies_logo" className="open-toggle-icon" onClick={toggleNav} style={{"padding":openNav?"0px":"10px"}} />:<FontAwesomeIcon icon={faAlignLeft} alt="palnies_logo" className="close-toggle-icon" onClick={toggleNav} style={{"padding":openNav?"0px":"10px"}} />}
    </div>    
        <a href="#dashboard" className="nav-item">
        <Link to="">
        <FontAwesomeIcon icon={faCubes} alt="icon" className="nav-icon"/>
        <p style={{"display":openNav?"block":"none"}}>Dashboard</p>
        </Link>
        </a>
        <a href="#clients" className="nav-item">
        <Link to="">
        <FontAwesomeIcon icon={faPeopleGroup} alt="icon" className="nav-icon"/>
        <p style={{"display":openNav?"block":"none"}}>Clients</p>
        </Link>
        </a> 
        <a href="#projects" className="nav-item">
        <Link to="/projects">
        <FontAwesomeIcon icon={faRectangleList} alt="icon" className="nav-icon"/>
        <p style={{"display":openNav?"block":"none"}}>Projects</p>
        </Link>
        </a> 
        <a href="#reports" className="nav-item">
        <Link to="">
        <FontAwesomeIcon icon={faFlag} alt="icon" className="nav-icon"/>
        <p style={{"display":openNav?"block":"none"}}>Reports</p>
        </Link>
        </a> 
        <a href="#invoices" className="nav-item">
        <Link to="">
        <FontAwesomeIcon icon={faFileInvoiceDollar} alt="icon" className="nav-icon"/>
        <p style={{"display":openNav?"block":"none"}}>Invoices</p>
        </Link>
        </a> 
        <a href="#automation" className="nav-item">
        <Link to="">
        <FontAwesomeIcon icon={faScrewdriverWrench} alt="icon" className="nav-icon"/>
        <p style={{"display":openNav?"block":"none"}}>Automation</p>
        </Link>
        </a>   
    </div>
  )
}
