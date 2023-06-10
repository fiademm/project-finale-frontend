import React from 'react';
import { FilledButton, LinkButton } from './Buttons';
import '../styles/components.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LearningPathCard = ({ title, description, thumbnail, numVideos }) => {
  return (
    <div className="path-card">
      <img className='path-card-image' src={thumbnail} alt={title} />
      <div className="path-card-body">
        <section className='section-1'>
            <h5 className="path-card-title">{title}</h5>
            <p className="path-card-text">{description}</p>
        </section>
        <section className='section-2'>
            <p className="path-card-text">{numVideos} Courses</p>
            <LinkButton buttonText='More details >' buttonLink='/courses' />
        </section>
      </div>
    </div>
  );
};

const CourseCard = ({ title, description, thumbnail, numVideos, videos }) => {
    const [showDetails, setShowDetails] = useState(false);
    const navigate = useNavigate();

    const handleToggleDetails = () => {
        navigate('/details', {state: {videos}});
    };

    return (
      <div className="path-card" onClick={handleToggleDetails}>
        <img className='path-card-image' src={thumbnail} alt={title} />
        <div className="path-card-body">
            <section className='section-1'>
                <h5 className="path-card-title">{title}</h5>
                <p className="path-card-text">{description}</p>
            </section>
          {/* {videos.slice(0, 3).map(video => (
              <a key={video} href={video} target="_blank" rel="noopener noreferrer">{video}</a>
              ))}
            {videos.length > 3 &&
                <p className="card-text">+ {videos.length - 3} more videos</p>
            } */}
          <section className="section-2">
            <p className="card-text">{numVideos} videos</p>
            <LinkButton buttonText='Start learning >' otherProps={videos} />
          </section>
        </div>
        {/* {showDetails &&
        <div className="card-body">
          <CourseDetails videos={videos} />
        </div>
        } */}
      </div>
    );
  };

export { LearningPathCard, CourseCard };