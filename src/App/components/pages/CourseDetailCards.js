import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const CourseDetailsCard = ({ onClick }) => {
    const IconName = icon || 'div';
    return(
        <>
            <div className="course-details-card">
                <></>

                    <BsChevronDown />
            </div>
        </>
    );
};

const CourseDetailsCardExpanded = ({ onClick }) => {
    return(
        <>
            <div className="course-details-card">
                <></>

                    <BsChevronUp />
            </div>
        </>
    );
};

const CourseVideosCard = ({ onClick }) => {
    return(
        <></>
    );
};

const CourseResourcesCard = ({ onClick }) => {
    return(
        <></>
    );
};

const CourseQuizzesCard = ({ onClick }) => {
    return(
        <></>
    );
};

const CourseForumCard = ({ onClick }) => {
    return(
        <></>
    );
};

function CardA({ onClick }) {
    return (
      <div className="card" onClick={onClick}>
        <h2>Card A</h2>
        <p>Click to show Card B</p>
      </div>
    );
  }
  
  function CardB({ onClick }) {
    return (
      <div className="card" onClick={onClick}>
        <h2>Card B</h2>
        <p>Click to show Card A</p>
      </div>
    );
  }

export { CourseDetailsCard, CourseDetailsCardExpanded }