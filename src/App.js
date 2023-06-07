import './App.css';
import AvailableCourses from './App/components/AvailableCourses';
import CourseDetails from './App/components/CourseDetails';
import Error404 from './App/components/Error404';
import Error500 from './App/components/Error500';
import LandingPage from './App/components/LandingPage';
import LectureVideo from './App/components/LectureVideo';
import Login from './App/components/Login';
import DesignPath from './App/components/Paths/DesignPath';
import MobilePath from './App/components/Paths/MobilePath';
import WebPath from './App/components/Paths/WebPath';
import Register from './App/components/Register';
import VideoPlayer from './App/components/VideoPlayer';
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
          <Route path='/designpath' element={<DesignPath />}></Route>
          <Route path='/mobilepath' element={<MobilePath />}></Route>
          <Route path='/webpath' element={<WebPath />}></Route>
          <Route path='/courses' element={<AvailableCourses />}></Route>
          <Route path='/video' element={<LectureVideo />}></Route>
          <Route path='/details' element={<CourseDetails />}></Route>
          <Route path='/404' element={<Error404 />}></Route>
          <Route path='/500' element={<Error500 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;