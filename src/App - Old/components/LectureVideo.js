import React from 'react';
import { HeaderAfterLogin } from './Headers';
import { FilledButton } from './Buttons';
import { OutlinedButton } from './Buttons';

const LectureVideo = () => {
    return(
        <>
            <HeaderAfterLogin />
            <div className="lecture-video-component-container">
                <div className="lecture-video-component-title">
                    Section 1 - Introduction to Figma
                    <hr className='lecture-title-underline' />
                </div>
                <div className="lecture-video-component-video-display">
                    <video className='lecture-video' src="https://youtu.be/Cx2dkpBxst8" controls></video>
                </div>
                <div className="lecture-video-component-navigation">
                    <OutlinedButton buttonText='Previous' />
                    <FilledButton buttonText='Next' />
                </div>
            </div>
        </>
    );
}

export default LectureVideo;