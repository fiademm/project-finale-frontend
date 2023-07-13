import React from 'react';
import "../styles/components.css";
import { Link } from 'react-router-dom';

const DefaultHeader = () => {
    return(
        <header className="header-container">
            <Link to='/' className="logo">open<span className='logo-learn'>learn</span></Link>
            <Link to='/login' className="user-info">OI</Link>
        </header>
    );
};

const LoggedInHeader = () => {
    return(
        <header className="header-container">
            <Link to='/paths' className="logo">open<span className='logo-learn'>learn</span></Link>
            <Link to='/profiles' className="user-info">OI</Link>
        </header>
    );
};

export { DefaultHeader, LoggedInHeader };