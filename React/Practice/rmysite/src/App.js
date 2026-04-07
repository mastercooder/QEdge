import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CourseGallery from './pages/CourseGallery';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<h3>Home</h3>} />
        <Route path="/course" element={<CourseGallery/>} />
        <Route path='/singup' element={<SignUp/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
