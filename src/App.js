import './App.css';
import Error404 from './App/components/Error404';
import Error500 from './App/components/Error500';
import Home from './App/components/Home';
import LandingPage from './App/components/LandingPage';
import Login from './App/components/Login';
import './App/styles/general.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
          <Route path='/landingpage' element={<LandingPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/404' element={<Error404 />}></Route>
          <Route path='/500' element={<Error500 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;