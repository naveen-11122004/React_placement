import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><a href="#skills-section">Skills</a></li>
        <li><Link to="/form">Form</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;