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
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <img src={course.thumbnail_url} alt={`Thumbnail for ${course.title}`} />
      {!isEnrolled && <button onClick={handleEnroll}>Enroll</button>}
    </div>
  );
}

export default CourseCard;