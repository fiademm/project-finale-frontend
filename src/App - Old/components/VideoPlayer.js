import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const VideoPlayer = ({ courseId }) => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const fetchVideoUrls = async () => {
    try {
      const response = await axios.get(`/courses/${courseId}`);
      setVideoUrls(response.data.video_urls);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < videoUrls.length - 1) {
      setCurrentVideoIndex(index => index + 1);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(index => index - 1);
    }
  };

  return (
    <div>
      <ReactPlayer url={videoUrls[currentVideoIndex]} width="100%" />
      <div>
        <button onClick={handlePreviousVideo}>Previous</button>
        <button onClick={handleNextVideo}>Next</button>
      </div>
    </div>
  );
};

export default VideoPlayer;