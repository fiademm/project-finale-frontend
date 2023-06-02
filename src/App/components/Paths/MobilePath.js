import React from 'react';
import { TabTwo } from '../Tabs';
import { HeaderAfterLogin } from '../Headers';
import { FooterAfterLogin } from '../Footers';

const MobilePath = () => {
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
                    <TabTwo />
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </section>
            </section>
            <FooterAfterLogin />
        </>
    );
};

export default MobilePath;