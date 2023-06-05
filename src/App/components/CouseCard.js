// import React, { useState } from "react";

// const CourseCard = ({ course }) => {
//   const [progress, setProgress] = useState(0);

//   const handleEnroll = () => {
//     // TODO: Enroll the user in the course
//   };

//   const handleProgressChange = (e) => {
//     setProgress(e.target.value);
//   };

//   return (
//     <div className="course-card">
//       <h2>{course.name}</h2>
//       <p>{course.description}</p>
//       <div className="progress">
//         <progress value={progress} max={5} />
//       </div>
//       <button onClick={handleEnroll}>Enroll</button>
//     </div>
//   );
// };

// export default CourseCard;



import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components.css';
import { FilledButton, FilledButton1, OutlinedButton1 } from './Buttons';

function CourseCard({ course }) {
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnroll = async () => {
    try {
      await axios.post(
        '/users/enroll',
        { courseId: course.id },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setIsEnrolled(true);
    } catch (error) {
      console.error(error);
      alert('Failed to enroll in course');
    }
  };

  useEffect(() => {
    const checkEnrollmentStatus = async () => {
      try {
        const response = await axios.get(`/courses/${course.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setIsEnrolled(true);
      } catch (error) {
        console.error(error);
      }
    };
    checkEnrollmentStatus();
  }, []);

  return (
    <div className='course-card-container'>
      <div className="course-image-container">
        <img  className='course-image' src={course.thumbnail_url} alt={`Thumbnail for ${course.title}`} />
      </div>
      <div className="course-info">
        <div className="title-and-description">
          <span className='course-title'>{course.title}</span>
          <span className='course-description'>{course.description}</span>
        </div>
        <div className="buttons">
          {isEnrolled ? (
          <div className='after-enrolled-buttons'>
            <OutlinedButton1 buttonText='Course outline' buttonLink='' buttonOnClick='' />
            <FilledButton1 buttonText='Resume learning' buttonLink='' buttonOnClick='' />
          </div>
        ) : (
          <div className='before-enrolled-buttons'>
            <FilledButton1 buttonText='Start learning' buttonLink='' buttonOnClick={handleEnroll} />
          </div>
        )}
          </div>
      </div>
      {/* <div className="div-two">
        <span>
          {!isEnrolled && <span>Not started, No progress</span>}
        </span>
      </div> */} 
    </div>
  );
}

export default CourseCard; 