import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../assets/style/Navbar.css'


const Navbar = () => {
  const getClass = ({ isActive }) =>
    isActive ? 'nav-link active p-2': 'nav-link p-1'


  return (
    <div className='Navbar d-flex justify-content-center'>
        <ul>
          <div className="NavLeft">
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/course">
                Course
              </NavLink>
            </li>
          </div>
          <div className="NavRight">
              <li>
                <NavLink to="/singup">
                  SingUp
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  Login
                </NavLink>
              </li>
          </div>
        </ul>
    </div>
  )
}

export default Navbar;