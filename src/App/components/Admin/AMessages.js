import React from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { Link } from 'react-router-dom';
import { BsBook, BsChatRightText, BsGear, BsGrid, BsPeople, BsPersonVideo3 } from 'react-icons/bs';
import DashboardButtons from './Buttons';

const AMessages = () => {
    return(
        <>
            <div className='admin-component-container'>
                <LoggedInHeader />
                <section className='admin-content-container'>
                    <section className='sidebar'>
                        <DashboardButtons />  
                    </section>
                    <section className='main-screen'>
                        messages
                    </section>
                </section>
                <LoggedInFooter />
            </div>
        </>
    );
};

export default AMessages;