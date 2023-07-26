import React from 'react';
import "../styles/components.css";
import { Link } from 'react-router-dom';
import IllustrationSrc from '../illustrations/Student stress-bro.png';
import DropdownMenu from './Dropdown';

const DefaultHeader = () => {
    return(
        <>
            <header className="header-container">
                <Link to='/' className="logo">open<span className='logo-learn'>learn</span></Link>
                <div className="button-links">
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Courses</Link>
                    <Link to='/login'>About us</Link>
                    <Link to='/login'>Contact us</Link>
                </div>
                <div className="home-button-links">
                    <Link to='/login' style={{padding: '0.4vw 1vw'}}>Login</Link>
                    <Link to='/register' style={{backgroundColor: '#0072c6', color: 'white', padding: '0.4vw 1vw', borderRadius: '0.1vw'}}>Register</Link>
                </div>
            </header>
            <section className='header-container-2'>
                <section className="header-content-container">
                    <span style={{fontFamily: 'CinzelBold', fontSize: '2.4vw'}}>CREATING TOP TECH TALENTS FOR THE WORLD</span>
                    <span>A platform that helps you learn technology skills virtually with free opportunities that will hasten your career success.</span>
                    <div className="header-content-buttons">
                        <Link to='/login' style={{textAlign: 'center', fontSize: '0.9vw', backgroundColor: '#0072c6', color: 'white', padding: '0.6vw 1.8vw', borderRadius: '0.1vw', fontFamily: 'Jost-Medium'}}>Get started</Link>
                        <Link to='/login' style={{textAlign: 'center', fontSize: '0.9vw', padding: '0.6vw 1.4vw', borderRadius: '0.1vw', fontFamily: 'Jost-Medium'}}>Browse courses</Link>
                    </div>
                </section>
                <section className="header-illustration-container">
                    <img src={IllustrationSrc} alt="" style={{height: '24vw', backgroundColor: 'transparent'}} />
                </section>
            </section>
        </>
    );
};

const LoggedInHeader = () => {
    return(
        <header className="header-container">
            <Link to='/courses' className="logo">open<span className='logo-learn'>learn</span></Link>
            <section className="header-links">
                <Link to='/events' className="header-link">Events</Link>
                <Link to='/instructors' className="header-link">Instructors</Link>
                <Link to='/jobs' className="header-link">Jobs</Link>
                <Link to='/news' className="header-link">News</Link>
            </section>
            <Link to='/profiles' className="user-info">OI</Link>
        </header>
    );
};

export { DefaultHeader, LoggedInHeader };