import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const getClass = ({ isActive }) =>
    isActive ? "nav-link active p-2" : "nav-link p-1";

  return (
    <div className="Navbar">
      <ul className="d-flex align-items-center">
        <div className="NavLeft">
          <li>
            <NavLink to="/" className={getClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={getClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={getClass}>
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink to="/courses" className={getClass}>
              Courses
            </NavLink>
          </li>
        </div>

        <div className="NavRight">
          <li className="last">
            <NavLink to="/signup" className={getClass}>
              SignUp
            </NavLink>
          </li>

          <li className="last">
            <NavLink to="/login" className={getClass}>
              Login
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
