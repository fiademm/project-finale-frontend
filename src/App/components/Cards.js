import React from 'react';
import { FilledButton, LinkButton } from './Buttons';
import '../styles/components.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";

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
          <section className="section-2">
            <p className="card-text">{numVideos} videos</p>
            <LinkButton buttonText='Start learning >' otherProps={videos} />
          </section>
        </div>
      </div>
    );
  };

const LinkCard = ({ icon, title, link }) => {
  const IconName = icon || 'div';
  return (
    <Link to={link}>
      <div className="link-card">
        <div className="link-card-body">
          <IconName className='icon-style' />
          <h5 style={{fontFamily: 'Jost-Regular', fontSize: '0.96vw', fontWeight: 'bold'}}>{title}</h5>
        </div>
        <BsChevronRight className='icon-style' />
      </div>
    </Link>
  );
};

export { LearningPathCard, CourseCard, LinkCard };