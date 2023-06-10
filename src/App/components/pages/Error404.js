import React from 'react';
import '../../styles/components.css';
import Error404Img from "../../illustrations/404 Error.png";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';

const Error404 = () => {
    return(
        <>
            <div className="error-component-container">
                <LoggedInHeader />
                <div className="error-content-container">
                    <img className='error-illustration' src={Error404Img} alt="Page Not Found" />
                    <Link to='/' ><button>Go back home</button></Link>
                </div>
                <LoggedInFooter />
            </div>
        </>
    );
};

export default Error404;