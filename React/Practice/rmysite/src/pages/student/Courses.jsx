import React from 'react'
import CourseCard from '../../components/student/CourseCard'
import { course } from '../../data/CourseData'


const Course = () => {
  return (
    <div>
      <h3>List of Courses</h3>
      {
        course.map((course)=>{
          <CourseCard key={course.cid} course = {course}/>
        })
      }
    </div>
  )
}

export default Course;