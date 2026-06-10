import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const StudentLayout = () => {
  return (
    <div style={{display: 'flex', minHeight: '100vh'}}>
      <div style={{width: '250px', background: '#f4f4f4', padding: '20px'}}>
        <h3>LMS Bar</h3>
        <nav style={{display: 'flex', flexDirection: 'column', gap:'15px'}}>
          <Link to='/student/dashboard'>Dashboard</Link>
          <Link to='/student/courses'>Courses</Link>
        </nav>
      </div>
      <div style={{flex:1, padding: '20px'}}>
        <Outlet/>
      </div>
    </div>
  )
}

export default StudentLayout;