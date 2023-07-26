import './App.css';
import ACourses from './App/components/Admin/ACourses';
import AInstructors from './App/components/Admin/AInstructors';
import AMessages from './App/components/Admin/AMessages';
import ASettings from './App/components/Admin/ASettings';
import AStudents from './App/components/Admin/AStudents';
import Dashboard from './App/components/Admin/Dashboard';
import Chat from './App/components/Chat';
import CourseQuiz from './App/components/CourseQuiz';
import News from './App/components/News';
import QuizComponent from './App/components/QuizComponent';
import ResumeTips from './App/components/ResumeTips';
import Badges from './App/components/pages/Badges';
import Certificates from './App/components/pages/Certificates';
import CourseDetails from './App/components/pages/CourseDetails';
import CourseVideo from './App/components/pages/CourseVideo';
import Courses from './App/components/pages/Courses';
import Error404 from './App/components/pages/Error404';
import Error500 from './App/components/pages/Error500';
import Events from './App/components/pages/Events';
import Favorites from './App/components/pages/Favorites';
import Instructors from './App/components/pages/Instructors';
import JobBoard from './App/components/pages/JobBoard';
import JobListing from './App/components/pages/JobListing';
import LandingPage from './App/components/pages/LandingPage';
import LearningPaths from './App/components/pages/LearningPaths';
import Login from './App/components/pages/Login';
import MyCourses from './App/components/pages/MyCourses';
import NoBadges from './App/components/pages/NoBadges';
import NoCertificates from './App/components/pages/NoCertificate';
import Profile from './App/components/pages/Profile';
import Register from './App/components/pages/Register';
import './App/styles/general.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/paths' element={<LearningPaths />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
          <Route path='/details' element={<CourseDetails />}></Route>
          <Route path='/videos' element={<CourseVideo />}></Route>
          <Route path='/quiz' element={<QuizComponent />}></Route>
          <Route path='/profiles' element={<Profile />}></Route>
          <Route path='/badges' element={<Badges />}></Route>
          <Route path='/nobadges' element={<NoBadges />}></Route>
          <Route path='/certificates' element={<Certificates />}></Route>
          <Route path='/nocertificates' element={<NoCertificates />}></Route>
          <Route path='/certificate/details' element={<Certificates />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
          <Route path='/mycourses' element={<MyCourses />}></Route>
          <Route path='/instructors' element={<Instructors />}></Route>
          <Route path='/job' element={<JobListing />}></Route>
          <Route path='/jobs' element={<JobBoard />}></Route>
          <Route path='/events' element={<Events />}></Route>
          <Route path='/tips' element={<ResumeTips />}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/chat' element={<Chat/>}></Route>
          <Route path='/404' element={<Error404 />}></Route>
          <Route path='/500' element={<Error500 />}></Route>
          {/* Admin Dashboard */}
          <Route path='/a-dashboard' element={<Dashboard />}></Route>
          <Route path='/a-courses' element={<ACourses />}></Route>
          <Route path='/a-instructors' element={<AInstructors />}></Route>
          <Route path='/a-messages' element={<AMessages />}></Route>
          <Route path='/a-students' element={<AStudents />}></Route>
          <Route path='/a-settings' element={<ASettings />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;









// import './App.css';
// import AvailableCourses from './App/components/AvailableCourses';
// import CourseDetails from './App/components/CourseDetails';
// import Error404 from './App/components/Error404';
// import Error500 from './App/components/Error500';
// import LandingPage from './App/components/LandingPage';
// import LectureVideo from './App/components/LectureVideo';
// import Login from './App/components/Login';
// import DesignPath from './App/components/Paths/DesignPath';
// import MobilePath from './App/components/Paths/MobilePath';
// import WebPath from './App/components/Paths/WebPath';
// import Register from './App/components/Register';
// import VideoPlayer from './App/components/VideoPlayer';
// import './App/styles/general.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <Routes>
//           <Route path='/' element={<LandingPage />}></Route>
//           <Route path='/login' element={<Login />}></Route>
//           <Route path='/register' element={<Register />}></Route>
//           <Route path='/designpath' element={<DesignPath />}></Route>
//           <Route path='/mobilepath' element={<MobilePath />}></Route>
//           <Route path='/webpath' element={<WebPath />}></Route>
//           <Route path='/courses' element={<AvailableCourses />}></Route>
//           <Route path='/video' element={<LectureVideo />}></Route>
//           <Route path='/details' element={<CourseDetails />}></Route>
//           <Route path='/404' element={<Error404 />}></Route>
//           <Route path='/500' element={<Error500 />}></Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;