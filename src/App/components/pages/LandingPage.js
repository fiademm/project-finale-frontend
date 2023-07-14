import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { DefaultHeader } from '../Headers';
import { DefaultFooter } from '../Footers';
import { FilledButton } from '../Buttons';
import { BadgeDetailsModal } from '../Modals';

const LandingPage = () => {
    return(
        <>
            <DefaultHeader />
            <h1>Welcome to Landing Page</h1>
            <Link to='/login'>
                <FilledButton buttonText='Proceed to login' />
            </Link>
            <DefaultFooter />
        </>
    );
};

export default LandingPage;