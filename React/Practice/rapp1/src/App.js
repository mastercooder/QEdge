import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Courses from './components/pages/Courses';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Error from './components/pages/Error';
import Course from './components/pages/Course';
import Navbar from './components/Navbar';
import { useLocation } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import Logout from './components/pages/Logout';


function App() {

  let isLogedin = true;
  let data = {
    "loginStatus": "User must login to get dashbord"
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/courses' element={<Courses />} />
          <Route exact path='/courses/:course' element={<Course />} />
          <Route exact path='/courses/:course/:cid' element={<Course />} />
          <Route exact path='/Logout' element={<Logout />} />
          <Route exact path='/Dashboard' element={isLogedin ? <Dashboard/> : <Navigate to="/Login" replace state={data}/>} />
          <Route exact path='/Login' element={<Login/>} />
          <Route exact path='/Signup' element={<Signup />} />
          <Route exact path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
