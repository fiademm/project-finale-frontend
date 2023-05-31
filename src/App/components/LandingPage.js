import React from 'react';
import { HeaderBeforeLogin } from './Headers';
import { FooterBeforeLogin } from './Footers';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FilledButton } from './Buttons';

const LandingPage = () => {
    return(
        <>
            <HeaderBeforeLogin />
            <h1>Welcome to Landing Page</h1>
            <FilledButton buttonText='Proceed to login' buttonLink='/login' />
            <FooterBeforeLogin />
        </>
    );
};

export default LandingPage;