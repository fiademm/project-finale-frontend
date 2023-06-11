import React from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../../styles/components.css';

const CourseVideo = () => {
    const location = useLocation();
    const { video } = location.state;

    return (
        <>
            <LoggedInHeader />
            <div className="video-player-container">
                <div style={{ textAlign:'left', fontFamily: 'Jost-Medium', display:'flex', flexDirection:'column', gap:'0.3vw' }}>
                    Course Name - {video}
                    <hr />
                </div>
                <ReactPlayer url={video} controls height='72vh' width='100%' />
            </div>
            <LoggedInFooter />
        </>
    );
};

export default CourseVideo;