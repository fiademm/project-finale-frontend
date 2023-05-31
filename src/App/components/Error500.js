import React from 'react';
import '../styles/components.css';
import Error500Img from "../illustrations/500 Internal Server Error.png";
import { HeaderAfterLogin } from './Headers';
import { FilledButton } from './Buttons';
import { FooterAfterLogin } from './Footers';

const Error500 = () => {
    return(
        <>
            <div className="error-component-container">
                <HeaderAfterLogin />
                <div className="error-content-container">
                    <img className='error-illustration' src={Error500Img} alt="Internal Server Error" />
                    <FilledButton buttonText='Go back home' />
                </div>
                <FooterAfterLogin />
            </div>
        </>
    );
};

export default Error500;