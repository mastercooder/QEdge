import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const {cid} = useParams();

  return (
    <div>
      <h2 className='text-decoration-underline mb-5 text-center'>CourseDetails Component</h2>
      <h3>Course ID: {cid}</h3>
    </div>
  )
}

export default CourseDetails;