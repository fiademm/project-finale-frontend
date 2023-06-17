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

const TabCard = ({ icon, title, link }) => {
  const IconName = icon || 'div';
  return (
    <Link to={link} style={{borderRadius: '0.2vw'}}>
      <div style={{display: 'flex', flexDirection:'row', alignItems:'center', gap: '0.5vw', padding: '0.4vw 1.8vw', borderRadius: '0.2vw', backgroundColor: 'transparent'}}>
        <IconName className='tab-icon-style' />
        <span style={{fontFamily: 'Jost-Medium', fontSize: '0.83vw'}}>{title}</span>
      </div>
    </Link>
  );
};  

const CertificateCard = ({ code, title, issuer, date, link }) => {
  return (
    <Link to={link} style={{borderRadius: '0.1vw', display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', gap: '0.5vw', width:'100%', padding: '1vw 1.2vw', borderRadius: '0.1vw', backgroundColor: '#fafafa', textAlign: 'left'}}>
        <span style={{fontFamily: 'Jost-Regular', backgroundColor: 'transparent', fontSize: '0.90vw', width: '5%'}}>{code}</span>
        <span style={{fontFamily: 'Jost-Regular', backgroundColor: 'transparent', fontSize: '0.90vw', width: '50%'}}>{title}</span>
        <span style={{fontFamily: 'Jost-Regular', backgroundColor: 'transparent', fontSize: '0.90vw', width: '24%'}}>{issuer}</span>
        <span style={{fontFamily: 'Jost-Regular', backgroundColor: 'transparent', fontSize: '0.90vw', width: '12%'}}>{date}</span>
    </Link>
  );
}; 

const BadgeCard = ({ image, badge, title, description, date, link }) => {
  return (
    <Link to={link} style={{borderRadius: '0.1vw', display: 'flex', flexDirection:'row', alignItems:'center', width:'33.1%', padding: '1vw 1.2vw', borderRadius: '0.1vw', backgroundColor: '#fafafa', textAlign: 'left'}}>
        <img src={image} alt="" />
        <span style={{fontFamily: 'Jost-SemiBold', backgroundColor: 'transparent', fontSize: '0.6vw', width: '5%'}}>{badge}</span>
        <span className='badge-span-style'>{title}</span>
        <span className='badge-span-style'>{description}</span>
        <span className='badge-span-style'>{date}</span>
    </Link>
  );
}; 

export { LearningPathCard, CourseCard, LinkCard, TabCard, CertificateCard, BadgeCard };