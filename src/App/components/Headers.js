import React from 'react';
import "../styles/components.css";

const DefaultHeader = () => {
    return(
        <header className="header-container">
            <div className="logo">open<span className='logo-learn'>learn</span></div>
            <div className="user-info">OI</div>
        </header>
    );
};

const LoggedInHeader = () => {
    return(
        <header className="header-container">
            <div className="logo">open<span className='logo-learn'>learn</span></div>
            <div className="user-info">OI</div>
        </header>
    );
};

export { DefaultHeader, LoggedInHeader };