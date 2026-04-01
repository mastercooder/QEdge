import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom';
import CourseBar from '../CourseBar';
const Course = () => {
  let {course,cid} = useParams();
  let [searchParams,setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get("cid"));
  return (
    <div>
      <CourseBar />
      <h3 style={{textAlign:"center"}}> <span style={{color:"red",textTransform:"uppercase"}}>{searchParams.get("cid")}</span> - Course Page</h3>
      <h3 style={{textAlign:"center"}}> <span style={{color:"red",textTransform:"uppercase"}}>{course}</span> - Course Page</h3>
    </div>
  )
}

export default Course;