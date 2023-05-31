import React from 'react';
import { HeaderAfterLogin } from './Headers';
import { FooterAfterLogin } from './Footers';
import Tabs from './Tabs';

const AvailableCourses = () => {
    const tabs = ["UI Design", "Mobile Development", "Web Development"];

    return(
        <>
            <HeaderAfterLogin />
            <section className="component-container">
                <Tabs tabs={tabs} />
                <section className='courses-component-container'>

                </section>
            </section>
            <FooterAfterLogin />
        </>
    );
};

export default AvailableCourses;