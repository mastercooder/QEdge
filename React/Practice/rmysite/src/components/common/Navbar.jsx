import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../assets/style/Navbar.css'


const Navbar = () => {
  const getClass = ({ isActive }) =>
    isActive ? 'nav-link active': 'nav-link'


  return (
    <div className='Navbar d-flex justify-content-center'>
        <ul>
          <div className="NavLeft">
            <li>
              <NavLink to="/" className={getClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/course" className={getClass} >
                Course
              </NavLink>
            </li>
          </div>
          <div className="NavRight">
              <li>
                <NavLink to="/dashboard" className={getClass} >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/singup" className={getClass} >
                  SingUp
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={getClass} >
                  Login
                </NavLink>
              </li>
          </div>
        </ul>
    </div>
  )
}

export default Navbar;