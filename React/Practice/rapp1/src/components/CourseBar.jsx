import React from 'react'
import { NavLink } from 'react-router-dom';
const CourseBar = () => {
  return (
    <>
      <ul>
        {/* <li><NavLink to="/" style={{backgroundColor:"red"}}>Home</NavLink></li> */}
        <li><NavLink to="/courses/python" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>Python</NavLink></li>
        <li><NavLink to="/courses/react" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>React</NavLink></li>
        <li><NavLink to="/courses/django" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>Django</NavLink></li>
        <li><NavLink to="/courses/fastapi" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>FastAPI</NavLink></li>
        <li><NavLink to="/courses/sql" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>SQL</NavLink></li>
        <li><NavLink to="/courses/javascript" style={({isActive})=>{return {backgroundColor: isActive ? 'aqua' : ''}}}>JavaScript</NavLink></li>
      </ul>
    </>
  )
}

export default CourseBar;