import React from 'react';
import { useLocation } from 'react-router-dom';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';

const CourseDetails = () => {
    const location = useLocation();
    const { videos } = location.state;

    return (
        <>
            <LoggedInHeader />
            <div className="card-deck">
                {videos.map((video, index) => (
                <div key={index} className="card">
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