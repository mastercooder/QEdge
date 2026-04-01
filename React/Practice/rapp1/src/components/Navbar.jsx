import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <>
      <ul>
        {/* <li><NavLink to="/" style={{backgroundColor:"red"}}>Home</NavLink></li> */}
        <li><NavLink to="/" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>Home</NavLink></li>
        <li><NavLink to="/about" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>About</NavLink></li>
        <li><NavLink to="/contact" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>Contact</NavLink></li>
        <li><NavLink to="/courses" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>Courses</NavLink></li>
        <li className='last'><NavLink to="/signup" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>SignUp</NavLink></li>
        <li className='last'><NavLink to="/login" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>Login</NavLink></li>
      </ul>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul> */}
    </>
  )
}

export default Navbar;