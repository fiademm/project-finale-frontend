import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import '../../styles/components.css';

const CourseDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { videos } = location.state;

    const handleCardClick = (index) => {
        const video = videos[index];
        const totalVideos = videos.length;
        navigate('/videos', {state: {video, index, videos, totalVideos}});
        // console.log(video + "   " + index + "   " + videos.length + "   " + totalVideos);
    };

    return (
        <>
            <LoggedInHeader />
            <div className="card-deck course-details-deck">
                {videos.map((video, index) => (
                <div key={index} className="card" onClick={() => {
                    handleCardClick(index);
                    console.log('This is the index ' + index)
                }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign: 'left', fontFamily: 'Jost-Medium', fontSize: '0.83vw'}}>Lesson {index + 1} - Introduction to the rest</h5>
                        <p className="card-text">{video}</p>
                    </div>
                </div>
                ))}
            </div>
            <LoggedInFooter />
        </>
    );
  };

export default CourseDetails;