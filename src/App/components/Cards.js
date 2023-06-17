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
    <Link to={link} style={{borderRadius: '0.1vw', display: 'flex', flexDirection:'column', gap:'1vw', width:'33%', padding: '1vw 1.2vw', borderRadius: '0.1vw', backgroundColor: 'transparent', color: 'black', textAlign: 'left', border: '0.0016vw solid #ddd'}}>
        <div style={{width: '100%', display:'flex', alignItems: 'center', justifyContent: 'center', padding: '3vw 2vw', borderRadius: '0.2vw', backgroundColor: '#333'}}>
          <img src={image} alt="" style={{height: '5vw', backgroundColor: 'transparent'}} />
        </div>
        <div style={{width: '100%', display:'flex', flexDirection: 'column', gap:'0.2vw', backgroundColor: 'transparent'}}>
          <span style={{fontFamily: 'Jost-Regular', textAlign:'left', backgroundColor: 'transparent', fontSize: '0.66vw', width: '100%'}}>{badge}</span>
          <span style={{fontFamily: 'Jost-Medium', backgroundColor: 'transparent', fontSize: '0.92vw', width: '100%'}}>{title}</span>
          <span style={{fontFamily: 'Jost-Regular', backgroundColor: 'transparent', fontSize: '0.80vw', width: '100%'}}>{description}</span>
          <span style={{fontFamily: 'Jost-Regular', backgroundColor: 'transparent', fontSize: '0.70vw', width: '100%', padding: '0.6vw 0'}}>Earned on {date}</span>
        </div>
    </Link>
  );
}; 

export { LearningPathCard, CourseCard, LinkCard, TabCard, CertificateCard, BadgeCard };