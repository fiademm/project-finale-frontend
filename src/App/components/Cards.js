import React from 'react';
import { FilledButton, LinkButton } from './Buttons';
import '../styles/components.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsChevronRight, BsStar, BsStarFill, BsFillCircleFill, BsEnvelope, BsTelephone, BsLinkedin } from "react-icons/bs";
import Rating from 'react-rating';
import { CertificateDetailsModal, ErrorDetailsModal, InstructorDetailsModal, JobDetailsModal } from './Modals';
import { Tooltip } from 'react-tooltip';

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

const CourseCard = ({ title, description, thumbnail, numVideos, rating, videos }) => {
    const [showDetails, setShowDetails] = useState(false);
    const navigate = useNavigate();

    const handleToggleDetails = () => {
        navigate('/details', {state: {title, description, thumbnail, numVideos, rating, videos}});
    };

    return (
      <div className="course-card" onClick={handleToggleDetails}>
        <img className='course-card-image' src={thumbnail} alt={title} />
        <div className="course-card-body">
            <section className='course-section-1'>
                <h5 className="course-card-title" style={{fontFamily: 'Jost-SemiBold', fontSize: '0.93vw', color: '#1c1d1f'}}>{title}</h5>
                <p className="course-card-text" style={{fontFamily: 'Jost-Regular', fontSize: '0.83vw', color: '#1c1d1f'}}>{description}</p>
                <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>Dr. Michael Boahene</p>
                <span style={{display: 'flex', gap: '0.3vw', alignItems: 'flex-end', color: '#b6690e', fontFamily: 'Jost-Medium', fontSize: '0.8vw'}}>
                  {rating}  
                  <Rating
                    initialRating={rating}
                    emptySymbol={<BsStar />}
                    fullSymbol={<BsStarFill />}
                    className='course-rating-style'
                    readonly
                  />
                </span>
            </section>
          <section className="course-section-2">
            <div style={{display: 'flex', flexDirection: 'row', gap: '0.6vw'}}>
              <span className="course-card-text">{numVideos} videos</span>
              <span className="course-card-text"><BsFillCircleFill style={{fontSize: '0.15vw'}} /> {numVideos} total hours</span>
              <span className="course-card-text"><BsFillCircleFill style={{fontSize: '0.15vw'}} /> {numVideos} lectures</span>
            </div>
          </section>
        </div>
      </div>
    );
  };

  const EnrolledCourseCard = ({ title, description, thumbnail, numVideos, videos }) => {
    const [showDetails, setShowDetails] = useState(false);
    const navigate = useNavigate();

    const handleToggleDetails = () => {
        navigate('/details', {state: {videos}});
    };

    return (
      <div className="course-card" onClick={handleToggleDetails}>
        <img className='course-card-image' src={thumbnail} alt={title} />
        <div className="course-card-body">
            <section className='course-section-1'>
                <h5 className="course-card-title" style={{fontFamily: 'Jost-SemiBold', fontSize: '0.93vw', color: '#1c1d1f'}}>{title}</h5>
                <p className="course-card-text" style={{fontFamily: 'Jost-Regular', fontSize: '0.83vw', color: '#1c1d1f'}}>{description}</p>
                <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>Dr. Michael Boahene</p>
            </section>
          <section style={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
            <LinkButton buttonText='Resume learning >' otherProps={videos} />
          </section>
        </div>
      </div>
    );
  };

  const JobCard = ({ industry, company, position, briefDescription, jobType, location, salary, postedOn, years, description }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openDialog() {
      setModalIsOpen(true);
    }

    function closeDialog() {
      setModalIsOpen(false);
    }    

    return (
      <>
        <div className="course-card" onClick={openDialog}>
          <div className="course-card-body" style={{gap: '0.6vw'}}>
              <section className='course-section-1'>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>{company}</p>
                  <h5 className="course-card-title" style={{fontFamily: 'Jost-SemiBold', fontSize: '1vw', color: '#1c1d1f'}}>{position}</h5>
                  <p className="course-card-text" style={{fontFamily: 'Jost-Regular', fontSize: '0.83vw', color: '#1c1d1f'}}>{description}</p>
                  <span style={{display: 'flex', flexDirection: 'row', gap: '1vw'}}>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>{jobType}</p>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>|</p>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>$ {salary} Monthly</p>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>|</p>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>{location}</p>
                  </span>
              </section>
              <section style={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                <p>{briefDescription}</p>
              </section>
          </div>
        </div>
        <JobDetailsModal isOpen={modalIsOpen} onClose={closeDialog} 
         />
      </>
    );
  };

  const EventCard = ({ title, date, time, briefDescription, link, otherDetails, company, location, duration }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openDialog() {
      setModalIsOpen(true);
    }

    function closeDialog() {
      setModalIsOpen(false);
    }    

    return (
      <>
        <div className="course-card" onClick={openDialog}>
          <div className="course-card-body" style={{gap: '0.6vw'}}>
              <section className='course-section-1'>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>{company}</p>
                  <h5 className="course-card-title" style={{fontFamily: 'Jost-SemiBold', fontSize: '1vw', color: '#1c1d1f'}}>{title}</h5>
                  <span style={{display: 'flex', flexDirection: 'row', gap: '1vw'}}>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>{date}</p>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>|</p>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>{time} GMT</p>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>|</p>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>{location}</p>
                  </span>
              </section>
              <section style={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                <p>{briefDescription}</p>
              </section>
          </div>
        </div>
        <JobDetailsModal isOpen={modalIsOpen} onClose={closeDialog} 
         />
      </>
    );
  };

  const TipCard = ({ id, title, content }) => {
    return (
      <>
        <div className="course-card">
          <div className="course-card-body" style={{gap: '0.4vw'}}>
              <section className='course-section-1'>
                  <p style={{fontFamily: 'Jost-Regular', fontSize: '0.74vw', color: '#6a85bd'}}>Tip {id}</p>
                  <h5 className="course-card-title" style={{fontFamily: 'Jost-SemiBold', fontSize: '0.96vw', color: '#1c1d1f'}}>{title}</h5>
              </section>
              <section style={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                <p>{content}</p>
              </section>
          </div>
        </div>
      </>
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

const InstructorCard = ({ name, emailAddress, phoneNumber, role, thumbnail, description, course, location, linkedin }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openDialog() {
    setModalIsOpen(true);
  }

  function closeDialog() {
    setModalIsOpen(false);
  }    

  return (
    <>
      <Link style={{borderBottom: '0.01vw solid #8185bd', display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', gap: '0.5vw', width:'100%', padding: '0vw 0.2vw', paddingBottom: '0.5vw', textAlign: 'left'}} onClick={openDialog} >
          <img src={thumbnail} alt="" style={{width: '4vw', height: '4vw', borderRadius: '50vw', objectFit: 'cover'}} />
          <span style={{fontFamily: 'Jost-Regular', fontSize: '0.90vw', width: '20%'}}>{name}</span>
          <span style={{fontFamily: 'Jost-Regular', fontSize: '0.90vw', width: '20%'}}>{role}</span>
          <span style={{fontFamily: 'Jost-Regular', fontSize: '0.90vw', width: '20%'}}>{course}</span>
          <span style={{fontFamily: 'Jost-Regular', fontSize: '0.90vw', width: '13%'}}>{location}</span>
          <span style={{display: 'flex', flexDirection: 'row', gap: '1vw', alignItems: 'center'}}>
            <BsEnvelope data-tooltip-id='email-tooltip' data-tooltip-content={emailAddress} style={{fontSize: '1.2vw', color: '333'}} />
            <BsTelephone data-tooltip-id='phone-tooltip' data-tooltip-content={phoneNumber} style={{fontSize: '1.1vw', color: '333'}} />
            <BsLinkedin data-tooltip-id='linkedin-tooltip' data-tooltip-content={linkedin} style={{fontSize: '1.1vw', color: '333'}} />
          </span>
          <Tooltip id='email-tooltip' place='bottom' />
          <Tooltip id='phone-tooltip' place='bottom' />
          <Tooltip id='linkedin-tooltip' place='bottom' />
      </Link>
        <InstructorDetailsModal isOpen={modalIsOpen} onClose={closeDialog} name={name} emailAddress={emailAddress} phoneNumber={phoneNumber} role={role} thumbnail={thumbnail} description={description} course={course} />
    </>
  );
}; 

const CertificateCard = ({ code, title, issuer, date, image, link }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openDialog() {
    setModalIsOpen(true);
  }

  function closeDialog() {
    setModalIsOpen(false);
  }    

  return (
    <>
      <Link to={link} style={{borderRadius: '0.1vw', display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', gap: '0.5vw', width:'100%', padding: '1vw 1.2vw', borderRadius: '0.1vw', backgroundColor: '#fafafa', textAlign: 'left'}} onClick={openDialog} >
          <span style={{fontFamily: 'Jost-Regular', backgroundColor: 'transparent', fontSize: '0.90vw', width: '5%'}}>{code}</span>
          <span style={{fontFamily: 'Jost-Regular', backgroundColor: 'transparent', fontSize: '0.90vw', width: '50%'}}>{title}</span>
          <span style={{fontFamily: 'Jost-Regular', backgroundColor: 'transparent', fontSize: '0.90vw', width: '24%'}}>{issuer}</span>
          <span style={{fontFamily: 'Jost-Regular', backgroundColor: 'transparent', fontSize: '0.90vw', width: '12%'}}>{date}</span>
      </Link>
        <CertificateDetailsModal isOpen={modalIsOpen} onClose={closeDialog} code={code} title={title} issuer={issuer} date={date} image={image} />
    </>
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

export { LearningPathCard, CourseCard, EnrolledCourseCard, JobCard, EventCard, LinkCard, TabCard, InstructorCard, CertificateCard, BadgeCard, TipCard };