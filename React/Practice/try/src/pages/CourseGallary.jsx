import React from "react";
import '../style/courseGallary.css'
import { useState } from "react";

const CourseGallery = () => {
  const [form, setFrom] = useState({
    course: '',
    duration: '',
    fee: '',
    trainer: '',
  });

  const [course, setCourse] = useState([]);

  const handChange = ( e) =>{
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const addCourse = (e) =>{
    if(!form.course || !form.duration || !form.fee || !form.trainer) return;
    setCourse([...course, form]);
    setFrom({
      course: '',
      duration: '',
      fee: '',
      trainer: '',
    });
  }

  const clearCourse = () =>{
    setFrom({
      course: '',
      duration: '',
      fee: '',
      trainer: '',
    });
  }

  return (
    <div className="Course">
      <h3 className="text-center mt-3">Course</h3>

      <div className="userInput mt-5">
        <input
          type="text"
          name="course"
          value = {form.course}
          placeholder="Course"
          onChange={handChange}
        />
        <input
          type="number"
          name="duration"
          value={form.duration}
          placeholder="Duration"
          onChange={handChange}
        />
        <input
          type="number"
          name="fee"
          value={form.fee}
          placeholder="Fee"
          onChange={handChange}
        />
        <input
          type="text"
          name="trainer"
          value={form.trainer}
          placeholder="Trainer"
          onChange={handChange}
        />
        <button onClick={addCourse}>Add</button>
        <button onClick={clearCourse}>Cancel</button>
      </div>

      <div className="displayData mt-5">
        <table>
          <thead>
            <th>CID</th>
            <th>Course</th>
            <th>Duration</th>
            <th>Fee</th>
            <th>Trainer</th>
          </thead>
          <tbody>
            {course.map((cr, index) =>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{cr.course}</td>
                  <td>{cr.duration}</td>
                  <td>{cr.fee}</td>
                  <td>{cr.trainer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseGallery;
