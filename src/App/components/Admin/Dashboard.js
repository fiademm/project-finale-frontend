import React from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { Link } from 'react-router-dom';
import DashboardButtons, { DashboardActive } from './Buttons';

const Dashboard = () => {
    return(
        <>
            <div className='admin-component-container'>
                <LoggedInHeader />
                <section className='admin-content-container'>
                    <section className='sidebar'>
                        <DashboardButtons />
                    </section>
                    <section className='main-screen'>
                        dashboard
                    </section>
                </section>
            </div>
        </>
    );
};

export default Dashboard;