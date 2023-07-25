import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { LoggedInHeader } from './Headers';
import { LoggedInFooter } from './Footers';
import { TipsList } from './CardsList';


const ResumeTips = () => {
    const tips = [
        {
            id: 1,
            title: 'Use Clear and Concise Language',
            content: 'Avoid jargon and use simple language to make your resume easily understandable to recruiters'
        },
        {
            id: 2,
            title: 'Highlight Relevant Skills',
            content: 'Focus on skills that are relevant to the tech industry and the job you are applying for.'
        },
        {
            id: 3,
            title: 'Quantify Your Achievements',
            content: 'Include specific numbers and metrics to showcase your accomplishments and impact in previous roles.'
        },
        {
            id: 4,
            title: 'Tailor Your Resume to the Job',
            content: 'Customize your resume for each job application to emphasize the most relevant experience and skills.'
        },
        {
            id: 5,
            title: 'Use an Easy-to-Read',
            content: 'Choose a clean and professional resume format with clear headings and bullet points.'
        },
        {
            id: 6,
            title: 'Include a Professional Summary',
            content: 'Start your resume with a brief professional summary that highlights your key strenghts and career goals.'
        },
        {
            id: 7,
            title: 'Use Action Verbs',
            content: 'Begin bullet points with action verbs to make your accomplishments stand out.'
        },
        {
            id: 8,
            title: 'Include Relevant Keywords',
            content: 'Incorporate keywords from the job description to align your resume with the employer\'s requirements.'
        },
        {
            id: 9,
            title: 'Keep it Concise',
            content: 'Limit your resume to one or two pages, focusing on the most mportant and recent information.'
        },
        {
            id: 10,
            title: 'Proofread and edit carefully',
            content: 'Check for spelling and grammar errors, and ensure consistency in formatting throughout your resume.'
        },
    ];

    return(
        <>
            <LoggedInHeader />
            <div className='page-heading'>
                <Link to='/profiles' className='page-link'><BsChevronLeft className='page-icon' /> <span style={{fontFamily: 'Jost-Medium', backgroundColor: 'transparent', color: '#fafafa', fontSize: '0.7vw'}}>Back to profiles</span></Link>
                <h3>Essential Tips</h3>
            </div>
            <section className='list-component-container'>
              <TipsList tips={tips} />
            </section>
            <LoggedInFooter />
        </>
    );
}

export default ResumeTips;