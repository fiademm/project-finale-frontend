import React from 'react';
import '../styles/components.css';
import Error404Img from "../illustrations/404 Error.png";
import { FilledButton } from './Buttons';
import { HeaderAfterLogin } from './Headers';
import { FooterAfterLogin } from './Footers';

const Error404 = () => {
    return(
        <>
            <div className="error-component-container">
                <HeaderAfterLogin />
                <div className="error-content-container">
                    <img className='error-illustration' src={Error404Img} alt="Page Not Found" />
                    <FilledButton buttonText='Go back home' />
                </div>
                <FooterAfterLogin />
            </div>
        </>
    );
};

export default Error404;