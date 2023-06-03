import React from 'react';
import './HeadNav.css';

const HeadNav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/" className="zillions-link">Zillions</a></li>
        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/" className="nav-link">About Us</a></li>
        <li className="nav-item"><a href="/" className="nav-link">Contact Us</a></li>
        <li className="nav-item"><a href="/" className="nav-link">Login</a></li>
        <li className="nav-item">
          <button className="get-started-button">Get Started</button>
        </li>
      </ul>
    </nav>
  );
};

export default HeadNav;

