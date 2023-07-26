import React from 'react';
import "../styles/components.css";

const HeaderAfterLogin = () => {
    return(
        <header className="header-container">
            <div className="logo">open<span className='logo-learn'>learn</span></div>
            <div className="user-info">OI</div>
        </header>
    );
};

const HeaderBeforeLogin = () => {
    return(
        <header className="header-container"></header>
    );
};

export { HeaderAfterLogin, HeaderBeforeLogin };