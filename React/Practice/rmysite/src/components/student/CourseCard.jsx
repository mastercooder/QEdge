import React from 'react'
import Course from '../../pages/student/Courses';

const CourseCard = ({Course}) => {
  return (
    <div>
      <h3>{Course.title}</h3>
      <p>{Course.dur}</p>
      <p>{Course.fee}</p>
      <h3>{Course.trainer}</h3>
    </div>
  )
}

export default CourseCard;