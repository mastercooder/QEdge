import { Routes, Route } from "react-router-dom";

import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import CourseGallery from '../pages/CourseGallery';
import Dashboard from '../pages/student/Dashboard';
import CourseDetails from "../pages/student/CourseDetails";
import AdminDashboard from '../pages/admin/AdminDashboard'
import StudentLayout from "../layout/StudentLayout";
import Courses from "../pages/student/Courses";

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

            // Student Layout
            <Route path="/student" element={<StudentLayout/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/courses" element={<Courses/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes;