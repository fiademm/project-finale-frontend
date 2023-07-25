import React from 'react';
import Circle from './Circle';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import '../../styles/components.css';
import { LinksList } from '../CardsList';
import { Bs123, BsAward, BsBookmark, BsBookmarkPlus, BsBoxArrowLeft, BsMortarboard, BsPlayBtn, BsTrophy } from "react-icons/bs";

const Profile = () => {
    const nameOfUser = 'Otchere Fia Israel';
    const emailAddress = 'fiademm1@gmail.com';
    const xp = 122;

    const links = [
        {
            icon: BsAward,
            title: 'Badges',
            link: '/badges'
        },
        {
            icon: BsMortarboard,
            title: 'Certificates',
            link: '/certificates'
        },
        {
            icon: BsBookmarkPlus,
            title: 'Favorites',
            link: '/favorites'
        },
        {
            icon: Bs123,
            title: 'Leaderboards',
            link: '/leaderboards'
        },
        {
            icon: BsPlayBtn,
            title: 'My courses',
            link: '/mycourses'
        },
        {
            icon: BsBoxArrowLeft,
            title: 'Logout',
            link: '/'
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
                    <p style={{fontSize: '0.83vw'}}>{xp} XP</p>
                </section>
                <LinksList links={links} />
            </div>
            <LoggedInFooter />
        </>
    );
};

export default Profile;