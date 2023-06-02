import { useState, useEffect } from 'react';
import axios from 'axios';

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/users/enrolled-courses', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setEnrolledCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div>
      <h2>My Enrolled Courses</h2>
      {enrolledCourses.length === 0 && <p>You haven't enrolled in any courses yet.</p>}
      {enrolledCourses.map(courseId => (
        <p key={courseId}>{courseId}</p>
      ))}
    </div>
  );
}