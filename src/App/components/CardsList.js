import React from 'react';
import { BadgeCard, CertificateCard, CourseCard, EnrolledCourseCard, LearningPathCard, LinkCard, TabCard } from './Cards';

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
            rating={course.rating}
          />
        ))}
      </div>
    );
  };

  const EnrolledCourseList = ({ enrolledCourses }) => {
    return (
      <div className="card-deck">
        {enrolledCourses.map(enrolledCourse => (
          <EnrolledCourseCard
            key={enrolledCourse.title}
            title={enrolledCourse.title}
            description={enrolledCourse.description}
            thumbnail={enrolledCourse.thumbnail}
            numVideos={enrolledCourse.numVideos}
            videos={enrolledCourse.videos}
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
            link={link.link}
            title={link.title}
            icon={link.icon}
          />
        ))}
      </div>
    );
  };

  const TabsList = ({ tabs }) => {
    return (
      <div style={{display: 'flex', flexDirection: 'row', gap: '0.6vw', padding: '0.5vw 0.8vw', borderRadius: '0.2vw'}}>
        {tabs.map(tab => (
          <TabCard
            key={tab.title}
            title={tab.title}
            icon={tab.icon}
          />
        ))}
      </div>
    );
  };

  const CertificateList = ({ certificates }) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '0.2vw', borderRadius: '0.2vw'}}>
        {certificates.map(certificate => (
          <CertificateCard
            key={certificate.code}
            code={certificate.code}
            title={certificate.title}
            issuer={certificate.issuer}
            date={certificate.date}
            image={certificate.image}
          />
        ))}
      </div>
    );
  };

  const BadgeList = ({ badges }) => {
    return (
      <div style={{display: 'flex', flexWrap:'wrap', gap: '0.2vw', borderRadius: '0.2vw', backgroundColor: 'transparent'}}>
        {badges.map(badge => (
          <BadgeCard
            key={badge.title}
            image={badge.image}
            badge={badge.badge}
            title={badge.title}
            description={badge.description}
            date={badge.date}
          />
        ))}
      </div>
    );
  };

export { LearningPathList, CourseList, EnrolledCourseList, LinksList, TabsList, CertificateList, BadgeList };