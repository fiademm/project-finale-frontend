import React from 'react';
import { LoggedInFooter } from '../Footers';
import { LoggedInHeader } from '../Headers';
import { CourseList, EnrolledCourseList } from '../CardsList';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const MyCourses = () => {
    const enrolledCourses = [
        {
          title: "React Fundamentals",
          description: "Get started with the React JavaScript library in this introductory course.",
          thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          numVideos: 12,
          rating: 4.0,
          videos: [
            "https://www.youtube.com/watch?v=Ke90Tje7VS0",
            "https://www.youtube.com/watch?v=-AbaV3nrw6E",
            "https://www.youtube.com/watch?v=PKwu15ldZ7k",
            "https://www.youtube.com/watch?v=5ptQGfyrV50",
            "https://www.youtube.com/watch?v=KJP1E-Y-xyo",
            "https://www.youtube.com/watch?v=2yPv2wXyJZs",
            "https://www.youtube.com/watch?v=3f9HbDqBkFE",
            "https://www.youtube.com/watch?v=Zb2mQyQRwqc",
            "https://www.youtube.com/watch?v=8Wf4fhoUaXw",
            "https://www.youtube.com/watch?v=UZhCvYhTjv0",
            "https://www.youtube.com/watch?v=5J6fs_BlVC0",
            "https://www.youtube.com/watch?v=ZnRFerIP8aA"
          ]
        }
      ];

    return(
        <>
            <LoggedInHeader />
            <div className='page-heading'>
                <Link to='/profiles' className='page-link'><BsChevronLeft className='page-icon' /> <span style={{fontFamily: 'Jost-Medium', backgroundColor: 'transparent', color: '#fafafa', fontSize: '0.7vw'}}>Back to profiles</span></Link>
                <h3>Enrolled courses</h3>
            </div>
            <section className='list-component-container'>
              <EnrolledCourseList enrolledCourses={enrolledCourses} />
            </section>
            <LoggedInFooter />
        </>
    );
};

export default MyCourses;