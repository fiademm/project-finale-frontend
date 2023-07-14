import React from 'react';
import { LoggedInFooter } from '../Footers';
import { LoggedInHeader } from '../Headers';
import { CourseList, EnrolledCourseList } from '../CardsList';

const MyCourses = () => {
    const enrolledCourses = [
        {
          title: "Intro to Python",
          description: "Learn the basics of Python programming with this introductory course.",
          thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          numVideos: 10,
          rating: 4.5,
          videos: [
            "https://www.youtube.com/watch?v=_Z1t7MNk0c4",
            "https://www.youtube.com/watch?v=kqtD5dpn9C8",
            "https://www.youtube.com/watch?v=QXeEoD0pB3E",
            "https://www.youtube.com/watch?v=6tNS--WetLI",
            "https://www.youtube.com/watch?v=rvvN6BQ5mVM",
            "https://www.youtube.com/watch?v=Kg1Yvry_Ydk",
            "https://www.youtube.com/watch?v=0Rryi19X_Y4",
            "https://www.youtube.com/watch?v=Z1Yd7upQsXY",
            "https://www.youtube.com/watch?v=QfQE1ayCzf8",
            "https://www.youtube.com/watch?v=JGwWNGJdvx8"
          ]
        },
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
        },
        {
          title: "Machine Learning",
          description: "Learn how to build machine learning models with Python and TensorFlow.",
          thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          numVideos: 15,
          rating: 4.0,
          videos: [
            "https://www.youtube.com/watch?v=aircAruvnKk",
            "https://www.youtube.com/watch?v=tPYj3fFJGjk",
            "https://www.youtube.com/watch?v=IHZwWFHWa-w",
            "https://www.youtube.com/watch?v=HGgdcKbC5ro",
            "https://www.youtube.com/watch?v=KNAWp2S3w94",
            "https://www.youtube.com/watch?v=4vryPwLtjIY",
            "https://www.youtube.com/watch?v=0Lt9w-BxKFQ",
            "https://www.youtube.com/watch?v=6g4O5UOH304",
            "https://www.youtube.com/watch?v=2FmcHiLCwTU",
            "https://www.youtube.com/watch?v=5DknTFbcGVM",
            "https://www.youtube.com/watch?v=4qxpOYv1LBE",
            "https://www.youtube.com/watch?v=JLNrR6HlN4Q",
            "https://www.youtube.com/watch?v=tNa99PG8hR8",
            "https://www.youtube.com/watch?v=7eh4d6sabA0",
            "https://www.youtube.com/watch?v=I74ymkoNTnw"
          ]
        }
      ];

    return(
        <>
            <LoggedInHeader />
            <section className='list-component-container'>
                <section style={{backgroundColor: '#333'}}>
                    <h2 style={{textAlign: 'left', background: 'none', fontFamily: 'Jost-SemiBold', display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>Enrolled courses <hr /></h2>

                </section>
                <EnrolledCourseList enrolledCourses={enrolledCourses} />
            </section>
            <LoggedInFooter />
        </>
    );
};

export default MyCourses;