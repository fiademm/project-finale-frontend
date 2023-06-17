import React from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { BadgeList, CertificateList } from '../CardsList';

const Badges = () => {
    const badges = [
        {
          "title": "Introduction to Mobile App Development",
          "badge": "Mobile App Development Beginner",
          "description": "Earned for completing an introductory course on mobile app development.",
          "image": "https://example.com/mobile-app-development-beginner.png",
          "date": "2022-01-01"
        },
        {
          "title": "React Native Fundamentals",
          "badge": "React Native Developer",
          "description": "Earned for completing a course on React Native development.",
          "image": "https://example.com/react-native-developer.png",
          "date": "2022-01-15"
        },
        {
          "title": "Advanced Mobile App Development",
          "badge": "Mobile App Development Expert",
          "description": "Earned for completing an advanced course on mobile app development.",
          "image": "https://example.com/mobile-app-development-expert.png",
          "date": "2022-02-01"
        },
        {
          "title": "Web Development Fundamentals",
          "badge": "Web Development Beginner",
          "description": "Earned for completing an introductory course on web development.",
          "image": "https://example.com/web-development-beginner.png",
          "date": "2022-02-15"
        },
        {
          "title": "JavaScript Essentials",
          "badge": "JavaScript Developer",
          "description": "Earned for completing a course on JavaScript development.",
          "image": "https://example.com/javascript-developer.png",
          "date": "2022-03-01"
        },
        {
          "title": "ReactJS Fundamentals",
          "badge": "React Developer",
          "description": "Earned for completing a course on React development.",
          "image": "https://example.com/react-developer.png",
          "date": "2022-03-15"
        },
        {
          "title": "Web Development Advanced Topics",
          "badge": "Web Development Expert",
          "description": "Earned for completing an advanced course on web development.",
          "image": "https://example.com/web-development-expert.png",
          "date": "2022-04-01"
        },
        {
          "title": "UI/UX Design Fundamentals",
          "badge": "UI/UX Design Beginner",
          "description": "Earned for completing an introductory course on UI/UX design.",
          "image": "https://example.com/ui-ux-design-beginner.png",
          "date": "2022-04-15"
        },
        {
          "title": "Adobe XD Essentials",
          "badge": "UI/UX Design Intermediate",
          "description": "Earned for completing a course on Adobe XD design.",
          "image": "https://example.com/ui-ux-design-intermediate.png",
          "date": "2022-05-01"
        },
        {
          "title": "User Interface Design Principles",
          "badge": "UI Design Expert",
          "description": "Earned for completing a course on UI design principles.",
          "image": "https://example.com/ui-design-expert.png",
          "date": "2022-05-15"
        },
        {
          "title": "User Experience Design Principles",
          "badge": "UX Design Expert",
          "description": "Earned for completing a course on UX design principles.",
          "image": "https://example.com/ux-design-expert.png",
          "date": "2022-06-01"
        },
        {
          "title": "Mobile App Design Essentials",
          "badge": "Mobile App Design Beginner",
          "description": "Earned for completing an introductory course on mobile app design.",
          "image": "https://example.com/mobile-app-design-beginner.png",
          "date": "2022-06-15"
        },
        {
          "title": "Responsive Web Design",
          "badge": "Web Design Expert",
          "description": "Earned for completing a course on responsive web design.",
          "image": "https://example.com/web-design-expert.png",
          "date": "2022-07-01"
        },
        {
          "title": "Design Thinking Fundamentals",
          "badge": "Design Thinking Beginner",
          "description": "Earned for completing an introductory course on design thinking.",
          "image": "https://example.com/design-thinking-beginner.png",
          "date": "2022-07-15"
        },
        {
          "title": "Mobile App Design Advanced Topics",
          "badge": "Mobile App Design Expert",
          "description": "Earned for completing an advanced course on mobile app design.",
          "image": "https://example.com/mobile-app-design-expert.png",
          "date": "2022-08-01"
        },
        {
          "title": "UI/UX Design Portfolio Development",
          "badge": "UI/UX Design Portfolio",
          "description": "Earned for developing a portfolio of UI/UX design work.",
          "image": "https://example.com/ui-ux-design-portfolio.png",
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