import React, { useEffect, useState } from 'react';
import { TabOne } from '../Tabs';
import { HeaderAfterLogin } from '../Headers';
import { FooterAfterLogin } from '../Footers';
import CourseCard from '../CouseCard';
import axios from 'axios';

const DesignPath = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('/courses/', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setCourses(response.data);
            } catch (error) {
                console.error(error + "There has been a change");
            }
        };
        fetchCourses();
    }, []);

    return(
        <>
            <HeaderAfterLogin />
            <section className="component-container">
                <section className='courses-component-container'>
                    <TabOne />
                    <div className="courses-display">
                        {courses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </section>
            </section>
            <FooterAfterLogin />
        </>
    );
};

export default DesignPath;