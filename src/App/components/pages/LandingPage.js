import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { DefaultHeader } from '../Headers';
import { DefaultFooter } from '../Footers';

const LandingPage = () => {
    return(
        <>
            <DefaultHeader />
            <h1>Welcome to Landing Page</h1>
            <Link to='/login'><button>Proceed to login</button></Link>
            <DefaultFooter />
        </>
    );
};

export default LandingPage;