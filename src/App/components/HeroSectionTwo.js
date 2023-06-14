import React from 'react';
import './HeroSectionTwo.css'; // Import the CSS file
import stats from './images/stats.jpg';

function HeroSectionTwo() {
  return (
    <div style={{ backgroundColor: '#777777' }}>
      <h1 className="title">Popular Courses</h1>
      <p className="description">
        Education is the process of learning knowledge, strengthening one’s <br />
        decision-making abilities, and getting ready to live a normal life.
      </p>
      <img src={stats} alt="Stats" className="stats-image" />
      <div className="course-details">
        <h2 className="course-title">Frontend Development - Advanced</h2>
        <p className="descriptionOne">
        This course is designed for beginners who want to  <br />
        learn the basics of frontend development. You will  <br />
        learn the fundamentals of HTML, CSS, and JavaScript, <br /> 
        and you will build your first web page. By the end of 
      </p>
      <button className="view-course-button">View Course</button>
      </div>

   <div className='big-container'>
      <img src={stats} alt="Stats" className="stats-imageOne" />
      <div className="course-detailsOne">
        <h2 className="course-titleOne">Frontend Development - Advanced</h2>
        <p className="descriptionTwo">
        This course is designed for beginners who want to  <br />
        learn the basics of frontend development. You will  <br />
        learn the fundamentals of HTML, CSS, and JavaScript, <br /> 
        and you will build your first web page. By the end of 
      </p>
      <button className="view-course-buttonOne">View Course</button>
      </div>
      </div>
   </div>
  );
}

export default HeroSectionTwo;
