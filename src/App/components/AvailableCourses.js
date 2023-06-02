import React from 'react';
import { HeaderAfterLogin } from './Headers';
import { FooterAfterLogin } from './Footers';
import Tabs, { TabOne } from './Tabs';

const AvailableCourses = () => {
    return(
        <>
            <HeaderAfterLogin />
            <section className="component-container">
                <section className='courses-component-container'>
                    <TabOne />
                </section>
            </section>
            <FooterAfterLogin />
        </>
    );
};

export default AvailableCourses;