import './App.css';
import Error404 from './App/components/Error404';
import Error500 from './App/components/Error500';
import LandingPage from './App/components/LandingPage';
import Login from './App/components/Login';
import Register from './App/components/Register';
import './App/styles/general.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App/styles/general.css';
import Categories from './App/components/Categories';
import Tutorial from './App/components/Tutorial';
import CourseProgress from './App/components/CourseProgress';
import Complete from './App/components/Complete'

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
          <Route path='/tutorial' element={<Tutorial />}></Route>
          <Route path='/complete' element={<Complete />}></Route>
           <Route path='/courseprogress' element={<CourseProgress />}></Route>
          <Route path='/404' element={<Error404 />}></Route>
          <Route path='/500' element={<Error500 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
