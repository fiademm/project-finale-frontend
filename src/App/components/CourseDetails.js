import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';

function CourseDetails() {
  const location = useLocation();
  const id = location.state.idNumber;
  console.log('This is the id ' + id);
  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleWatch = (videoUrl) => {
    const videoIndex = course.video_urls.indexOf(videoUrl);
    const newProgress = Math.floor((course.lessons[videoIndex].duration / 2) * 1000) / 1000; // set progress to half of video duration
    setProgress(newProgress);
    try {
      axios.post(
        `/courses/${id}/progress`,
        { progress: newProgress },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/courses/${id}`, {
          // use the course id from the useParams hook
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setCourse(response.data);
        setProgress(response.data.progress);
      } catch (error) {
        console.error(error);
      }
    };
    if (id !== null) {
      fetchCourse();
    }
  }, [id]); //  use the course id from the useParams hook as the dependency of the useEffect

  const handleProgress = async (event) => {
    const newProgress = Math.round(event.playedSeconds / event.duration * 100);
    setProgress(newProgress);
    try {
      await axios.post(
        `/courses/${id}/progress`,
        { progress: newProgress },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (!course) {
    return <div>Loading... The id is {id} </div>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <img src={course.thumbnail_url} alt={`Thumbnail for ${course.title}`} />
      <ReactPlayer url={course.video_urls[0]} onProgress={handleProgress} />
      <progress value={progress} max="100" />
      <ul>
        {course.video_urls.map((videoUrl, index) => (
          <li key={index}>
            <button onClick={() => handleWatch(videoUrl)}>Watch Video {index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;