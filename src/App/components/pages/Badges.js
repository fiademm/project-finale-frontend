import React from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { BadgeList } from '../CardsList';
import Badge1 from '../../images/badges/badge1.png';
import Badge2 from '../../images/badges/badge2.png';
import Badge3 from '../../images/badges/badge3.png';

const Badges = () => {
    const badges = [
        {
          "title": "Introduction to Mobile App Development",
          "badge": "Mobile App Development Beginner",
          "description": "Earned for completing an introductory course on mobile app development.",
          "image": Badge1,
          "date": "2022-01-01"
        },
        {
          "title": "React Native Fundamentals",
          "badge": "React Native Developer",
          "description": "Earned for completing a course on React Native development.",
          "image": Badge2,
          "date": "2022-01-15"
        },
        {
          "title": "Advanced Mobile App Development",
          "badge": "Mobile App Development Expert",
          "description": "Earned for completing an advanced course on mobile app development.",
          "image": Badge3,
          "date": "2022-02-01"
        },
        {
          "title": "Web Development Fundamentals",
          "badge": "Web Development Beginner",
          "description": "Earned for completing an introductory course on web development.",
          "image": Badge1,
          "date": "2022-02-15"
        },
        {
          "title": "JavaScript Essentials",
          "badge": "JavaScript Developer",
          "description": "Earned for completing a course on JavaScript development.",
          "image": Badge2,
          "date": "2022-03-01"
        },
        {
          "title": "ReactJS Fundamentals",
          "badge": "React Developer",
          "description": "Earned for completing a course on React development.",
          "image": Badge3,
          "date": "2022-03-15"
        },
        {
          "title": "Web Development Advanced Topics",
          "badge": "Web Development Expert",
          "description": "Earned for completing an advanced course on web development.",
          "image": Badge1,
          "date": "2022-04-01"
        },
        {
          "title": "UI/UX Design Fundamentals",
          "badge": "UI/UX Design Beginner",
          "description": "Earned for completing an introductory course on UI/UX design.",
          "image": Badge2,
          "date": "2022-04-15"
        },
        {
          "title": "Adobe XD Essentials",
          "badge": "UI/UX Design Intermediate",
          "description": "Earned for completing a course on Adobe XD design.",
          "image": Badge3,
          "date": "2022-05-01"
        },
        {
          "title": "User Interface Design Principles",
          "badge": "UI Design Expert",
          "description": "Earned for completing a course on UI design principles.",
          "image": Badge1,
          "date": "2022-05-15"
        },
        {
          "title": "User Experience Design Principles",
          "badge": "UX Design Expert",
          "description": "Earned for completing a course on UX design principles.",
          "image": Badge2,
          "date": "2022-06-01"
        },
        {
          "title": "Mobile App Design Essentials",
          "badge": "Mobile App Design Beginner",
          "description": "Earned for completing an introductory course on mobile app design.",
          "image": Badge3,
          "date": "2022-06-15"
        },
        {
          "title": "Responsive Web Design",
          "badge": "Web Design Expert",
          "description": "Earned for completing a course on responsive web design.",
          "image": Badge1,
          "date": "2022-07-01"
        },
        {
          "title": "Design Thinking Fundamentals",
          "badge": "Design Thinking Beginner",
          "description": "Earned for completing an introductory course on design thinking.",
          "image": Badge2,
          "date": "2022-07-15"
        },
        {
          "title": "Mobile App Design Advanced Topics",
          "badge": "Mobile App Design Expert",
          "description": "Earned for completing an advanced course on mobile app design.",
          "image": Badge3,
          "date": "2022-08-01"
        },
        {
          "title": "UI/UX Design Portfolio Development",
          "badge": "UI/UX Design Portfolio",
          "description": "Earned for developing a portfolio of UI/UX design work.",
          "image": Badge1,
          "date": "2022-08-15"
        }
      ]

    return(
        <>
            <LoggedInHeader />
            <div className='page-heading'>
                <h3>Badges</h3>
            </div>
            <div style={{width:'100%', padding:'1% 20%', backgroundColor:'#f6f6f6', borderRadius:'0.2vw'}}>
                <BadgeList badges={badges} />
            </div>
            <LoggedInFooter />
        </>
    );
};

export default Badges;