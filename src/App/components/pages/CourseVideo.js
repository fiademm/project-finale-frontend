import React, { useRef, useState } from 'react';
import { LoggedInHeader } from '../Headers';
import { LoggedInFooter } from '../Footers';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../../styles/components.css';

const CourseVideo = () => {
    const location = useLocation();
    const { video } = location.state;
    const playerRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleProgress = (state) => {
        setCurrentTime(state.playedSeconds);
        setDuration(state.loadedSeconds);
    };

    const playedSeconds = playerRef.current ? playerRef.current.getCurrentTime() : 0;
    const progress = playerRef.current ? playerRef.current.getDuration() > 0 ? playerRef.current.getCurrentTime() / playerRef.current.getDuration() : 0 : 0;
    console.log('progress:', progress );

    return (
        <>
            <LoggedInHeader />
            <div className="video-player-container">
                <div style={{ textAlign:'left', fontFamily: 'Jost-Medium', display:'flex', flexDirection:'column', gap:'0.3vw' }}>
                    Course Name - {video}
                    <hr />
                </div>
                <ReactPlayer ref={playerRef} url={video} controls height='72vh' width='100%' onProgress={handleProgress} />
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress * 100}%` }}></div>
                </div>
            </div>
            <LoggedInFooter />
        </>
    );
};

export default CourseVideo;