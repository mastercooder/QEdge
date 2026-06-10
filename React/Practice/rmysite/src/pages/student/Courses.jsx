import React from 'react'
import CourseCard from '../../components/student/CourseCard'
import { courses } from '../../data/CourseData'


const Course = () => {
  return (
    <div>
      <h3>List of Courses</h3>
      {
        courses.map((course)=>{
          <CourseCard key={courses.cid} course = {course}/>
        })
      }
    </div>
  )
}

export default Course;