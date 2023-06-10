import React from 'react';
import { CourseCard, LearningPathCard } from './Cards';

const LearningPathList = ({ learningPaths }) => {
  return (
    <div className="card-deck">
      {learningPaths.map(path => (
        <LearningPathCard
          key={path.title}
          title={path.title}
          description={path.description}
          thumbnail={path.thumbnail}
          numVideos={path.numVideos}
        />
      ))}
    </div>
  );
};

const CourseList = ({ courses }) => {
    return (
      <div className="card-deck">
        {courses.map(course => (
          <CourseCard
            key={course.title}
            title={course.title}
            description={course.description}
            thumbnail={course.thumbnail}
            numVideos={course.numVideos}
            videos={course.videos}
          />
        ))}
      </div>
    );
  };

export { LearningPathList, CourseList };