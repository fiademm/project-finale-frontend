import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import '../../styles/components.css';
import Rating from 'react-rating';
import { BsCameraVideo, BsStar, BsStarFill } from 'react-icons/bs';

const CourseDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, description, thumbnail, numVideos, rating, videos } = location.state;

    const handleCardClick = (index) => {
        const video = videos[index];
        const totalVideos = videos.length;
        navigate('/videos', {state: {video, index, videos, totalVideos}});
        // console.log(video + "   " + index + "   " + videos.length + "   " + totalVideos);
    };

    return (
        <>
            <LoggedInHeader />
            <section className='course-details-container-1'>
                <h2 style={{backgroundColor: 'transparent', fontFamily: 'Jost-SemiBold', fontSize: '2.0vw', color: '#fff'}}>{title}</h2>
                <p style={{backgroundColor: 'transparent', fontFamily: 'Jost-Regular', fontSize: '0.96vw'}}>{description}</p>
                <p style={{backgroundColor: 'transparent', fontFamily: 'Jost-Regular', fontSize: '1vw'}}></p>
                <span style={{backgroundColor: 'transparent', fontFamily: 'Jost-Regular', fontSize: '0.8vw'}}>255 students enrolled</span>
                <span style={{backgroundColor: 'transparent', fontFamily: 'Jost-Regular', fontSize: '0.8vw'}}>Rating: {rating} </span>
                <span style={{backgroundColor: 'transparent', fontFamily: 'Jost-Regular', fontSize: '0.8vw'}}>Created by Kwame Bills</span>
            </section>
            <section className='course-details-container-2'>
                <div className='course-details-container-2-in'>
                    <h6 style={{fontFamily: 'Jost-SemiBold', fontSize: '1vw'}}>Course outline</h6>
                    In this course, you will learn the fundamentals of the Python programming language. You will learn about:
                        The basic syntax of Python
                        Data types and variables
                        Operators and expressions
                        Control flow statements
                        Functions
                        Modules
                        Object-oriented programming
                        Input and output
                        Error handling
                        Testing
                </div>
                <div className='course-details-container-2-in'>
                    <h6 style={{fontFamily: 'Jost-SemiBold', fontSize: '1vw'}}>Course outline</h6>
                    In this course, you will learn the fundamentals of the Python programming language. You will learn about:
                        The basic syntax of Python
                        Data types and variables
                        Operators and expressions
                        Control flow statements
                        Functions
                        Modules
                        Object-oriented programming
                        Input and output
                        Error handling
                        Testing
                </div>
            </section>
            <section className="card-deck course-details-deck">
                <h6 style={{fontFamily: 'Jost-SemiBold', fontSize: '1vw', textAlign: 'left'}}>Course videos</h6>
                <br />
                {videos.map((video, index) => (
                <div key={index} className="card" onClick={() => {
                    handleCardClick(index);
                }}>
                    <div className="card-body">
                        <BsCameraVideo />
                        <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
                            <h3 className="card-title" style={{textAlign: 'left', fontFamily: 'Jost-SemiBold', fontSize: '0.83vw'}}>Lesson {index + 1} - Introduction to the rest</h3>
                            <p className="card-text">{video}</p>
                            <p className="card-text">5 mins</p>
                        </span>
                    </div>
                </div>
                ))}
            </section>
            <LoggedInFooter />
        </>
    );
  };

export default CourseDetails;