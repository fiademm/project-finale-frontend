import React from 'react';
import { TabThree } from '../Tabs';
import { FooterAfterLogin } from '../Footers';
import { HeaderAfterLogin } from '../Headers';
import CourseCard from '../CouseCard';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const WebPath = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('/courses', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setCourses(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCourses();
    }, []);

    return(
        <>
            <HeaderAfterLogin />
            <section className="component-container">
                <section className='courses-component-container'>
                    <TabThree />
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </section>
            </section>
            <FooterAfterLogin />
        </>
    );
};

export default WebPath;