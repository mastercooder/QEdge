import React from 'react'
import course from '../../pages/student/Courses';
import { Link } from 'react-router-dom';
import '../../assets/style/courseCard.css'

const CourseCard = ({course}) => {
  return (
    <div className='courseCard p-3 m-3'>
      <h3>{course.title}</h3>
      <p>{course.dur}</p>
      <p>{course.fee}</p>
      <h3>{course.trainer}</h3>
      <Link to={`/student/course/${course.cid}`}>View Course</Link>
    </div>
  )
}

export default CourseCard;