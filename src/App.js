import './App.css';
import AvailableCourses from './App/components/AvailableCourses';
import Error404 from './App/components/Error404';
import Error500 from './App/components/Error500';
import LandingPage from './App/components/LandingPage';
import Login from './App/components/Login';
import DesignPath from './App/components/Paths/DesignPath';
import MobilePath from './App/components/Paths/MobilePath';
import WebPath from './App/components/Paths/WebPath';
import Register from './App/components/Register';
import './App/styles/general.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App/styles/general.css';
import Categories from './App/components/Categories';
import Tutorial from './App/components/Tutorial';
import CourseProgress from './App/components/CourseProgress';
import Complete from './App/components/Complete'
import Courses from './App/components/Courses'
import Web from './App/components/Web'
import Mobile from './App/components/Mobile'
import Section1 from './App/components/Section1'
import Section2 from './App/components/Section2'


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
            <Route path='/' element={<LandingPage />}></Route>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/categories' element={<CourseProgress />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/404' element={<Error404 />}></Route>
          <Route path='/500' element={<Error500 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;