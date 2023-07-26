import React from 'react';
import '../../styles/components.css';
import Error500Img from "../../illustrations/500 Internal Server Error.png";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { LoggedInFooter } from '../Footers';
import { LoggedInHeader } from '../Headers';
import { FilledButton } from '../Buttons';

const Error500 = () => {
    return(
        <>
            <div className="error-component-container">
                <LoggedInHeader />
                <div className="error-content-container">
                    <img className='error-illustration' src={Error500Img} alt="Internal Server Error" />
                    <Link to='/' ><FilledButton buttonText='Go back home' /></Link>
                </div>
                <LoggedInFooter />
            </div>
        </>
    );
};

export default Error500;