import React, { useState } from "react";

const CourseCard = ({ course }) => {
  const [progress, setProgress] = useState(0);

  const handleEnroll = () => {
    // TODO: Enroll the user in the course
  };

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };

  return (
    <div className="course-card">
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <div className="progress">
        <progress value={progress} max={5} />
      </div>
      <button onClick={handleEnroll}>Enroll</button>
    </div>
  );
};

export default CourseCard;