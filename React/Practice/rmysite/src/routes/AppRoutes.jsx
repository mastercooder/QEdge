import { Routes, Route } from "react-router-dom";

// Authenticaion Pages
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';

// Student Pages
import CourseGallery from '../pages/CourseGallery';
import Dashboard from '../pages/student/Dashboard';
import CourseDetails from "../pages/student/CourseDetails";
import Courses from "../pages/student/Courses";

// Other Pages
import AdminDashboard from '../pages/admin/AdminDashboard'

// Layouts pages 
import StudentLayout from "../layout/StudentLayout";

// Trainer Page
import TrainerDashboard from "../pages/trainer/TrainerDashboard";

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<h3>Home</h3>} />
            <Route path='/singup' element={<SignUp/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/course" element={<CourseGallery/>} />
            <Route path="/course/:cid" element={<CourseDetails/>} />
            <Route path="/admindashboard" element={<AdminDashboard/>} />
            <Route path="/studentlayout" element={<StudentLayout/>}/>

            {/* Student Layout */}
            <Route path="/student" element={<StudentLayout/>}>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="courses" element={<Courses/>}/>
                <Route path="course/:cid" element={<CourseDetails/>}/>
            </Route>

            {/* Trainer Layout*/}
            <Route path="/trainer" element={<TrainerDashboard/>}/>

        </Routes>
    )
}

export default AppRoutes;