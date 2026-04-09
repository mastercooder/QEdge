import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const {cid} = useParams();

  return (
    <div>
      <h3>Course ID: {cid} courseDetails Component</h3>
    </div>
  )
}

export default CourseDetails;