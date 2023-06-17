import React from 'react';
import Circle from './Circle';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import '../../styles/components.css';
import { LinksList } from '../CardsList';
import { BsAward, BsBookmark, BsPlayBtn, BsTrophy } from "react-icons/bs";

const Profile = () => {
    const nameOfUser = 'Otchere Fia Israel';
    const emailAddress = 'fiademm1@gmail.com';

    const links = [
        {
            icon: BsTrophy,
            title: 'Achievements',
            link: '/achievements'
        },
        {
            icon: BsBookmark,
            title: 'Bookmarks',
            link: '/bookmarks'
        },
        {
            icon: BsAward,
            title: 'Certificates',
            link: '/certificates'
        },
        {
            icon: BsPlayBtn,
            title: 'My courses',
            link: '/mycourses'
        }
    ]

    return(
        <>
            <LoggedInHeader />
            <div className="component-container">
                <Circle />
                <section>
                    <p style={{fontFamily: 'Jost-Medium', fontSize: '1.1vw'}}>{nameOfUser}</p>
                    <p style={{fontSize: '0.83vw'}}>{emailAddress}</p>
                </section>
                <LinksList links={links} />
            </div>
            <LoggedInFooter />
        </>
    );
};

export default Profile;