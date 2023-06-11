import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';

const CourseDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { videos } = location.state;

    const handleCardClick = (index) => {
        const video = videos[index];
        navigate('/videos', {state: {video}});
    };

    return (
        <>
            <LoggedInHeader />
            <div className="card-deck">
                {videos.map((video, index) => (
                <div key={index} className="card" onClick={() => {
                    handleCardClick(index);
                    console.log('This is the index ' + index)
                }}>
                    <div className="card-body">
                    <h5 className="card-title">Video {index + 1}</h5>
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