import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
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
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Signup' element={<Signup />} />
          <Route exact path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
