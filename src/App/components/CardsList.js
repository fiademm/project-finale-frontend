import React from 'react';
import { CourseCard, LearningPathCard, LinkCard } from './Cards';

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

  const LinksList = ({ links }) => {
    return (
      <div className="links-card-deck">
        {links.map(link => (
          <LinkCard
            key={link.title}
            title={link.title}
            icon={link.icon}
          />
        ))}
      </div>
    );
  };

export { LearningPathList, CourseList, LinksList };