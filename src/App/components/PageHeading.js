import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PageHeading = ({ title, link }) => {
    return(
        <>
            <div className='page-heading'>
                <Link to={link} className='page-link'><BsChevronLeft className='page-icon' /> <span style={{fontFamily: 'Jost-Medium', backgroundColor: 'transparent', color: '#fafafa', fontSize: '0.7vw'}}>Back to profiles</span></Link>
                <h3>{title}</h3>
            </div>
        </>
    )
};

export default PageHeading;