import React from 'react';
import '../../styles/components.css';
import Error500Img from "../../illustrations/500 Internal Server Error.png";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { LoggedInFooter } from '../Footers';
import { LoggedInHeader } from '../Headers';

const Error500 = () => {
    return(
        <>
            <div className="error-component-container">
                <LoggedInHeader />
                <div className="error-content-container">
                    <img className='error-illustration' src={Error500Img} alt="Internal Server Error" />
                    <Link to='/' ><button>Go back home</button></Link>
                </div>
                <LoggedInFooter />
            </div>
        </>
    );
};

export default Error500;