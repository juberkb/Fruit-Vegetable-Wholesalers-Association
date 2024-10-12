import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import 'animate.css';
import "../styles/navbar.css"
import webLogo from "../../assets/logoFv-web.png";
import Button from '../../components/button/Button';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleRegisterNowClick = () => {
    navigate('/registernow');
    closeMenu(); 
  };

  return (
    <header className="navbar" style={{ width: "100%", overflow: "hidden" }}>
      <div className="navbar-container">
        <div className='logo-menu-row'>
          <div className="logo">
            <img src={webLogo} alt="FV Association" className='navbar-logo' />
          </div>
          <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
          </button>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
          <Link to="/aboutus" className="nav-item" onClick={closeMenu}>About Us</Link>
          <Link to="/members" className="nav-item" onClick={closeMenu}>Members</Link>
          <Link to="/services" className="nav-item" onClick={closeMenu}>Services</Link>
          <Link to="/contact" className="nav-item" onClick={closeMenu}>Contact Us</Link>
          
          <Button  onClick={handleRegisterNowClick}  text="Register Now" 
               />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
