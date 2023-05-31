import './App.css';
import AvailableCourses from './App/components/AvailableCourses';
import Error404 from './App/components/Error404';
import Error500 from './App/components/Error500';
import LandingPage from './App/components/LandingPage';
import LectureVideo from './App/components/LectureVideo';
import Login from './App/components/Login';
import Register from './App/components/Register';
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
          <Route path='/courses' element={<AvailableCourses />}></Route>
          <Route path='/video' element={<LectureVideo />}></Route>
          <Route path='/404' element={<Error404 />}></Route>
          <Route path='/500' element={<Error500 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;