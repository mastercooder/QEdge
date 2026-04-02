import React, { useState } from "react";
import CourseBar from "../CourseBar";
import "../../css/Course.css";

const Courses = () => {
  const [form, setForm] = useState({
    course: "",
    duration: "",
    fee: "",
    trainer: "",
  });

  const [course, setCourse] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addCourse = () => {
    if (!form.course || !form.duration || !form.fee || !form.trainer) return;
    setCourse([...course, form]);
    setForm({
      course: "",
      duration: "",
      fee: "",
      trainer: "",
    });
  };

  const cancelCourse = () => {
    setForm({
      course: "",
      duration: "",
      fee: "",
      trainer: "",
    });
  };

  return (
    <div className="Course text-center mt-5">
      <h1>List of Courses</h1>
      <CourseBar />

      <div className="UserInput">
        <input
          type="text"
          name="course"
          value={form.course}
          placeholder="Course"
          onChange={handleChange}
        />
        <input
          type="number"
          name="duration"
          value={form.duration}
          placeholder="Duration"
          onChange={handleChange}
        />
        <input 
        type="number"
          name="fee"
          value={form.fee}
          placeholder="Fee"
          onChange={handleChange} 
        />
        <input 
        type="text"
          name="trainer"
          value={form.trainer}
          placeholder="Trainer"
          onChange={handleChange} 
        />
        <button onClick={addCourse}>Add</button>
        <button onClick={cancelCourse}>Cancel</button>
      </div>

      <div className="DisplayData mt-5 d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th>CID</th>
              <th>Course</th>
              <th>Duration</th>
              <th>Fee</th>
              <th>Trainer</th>
            </tr>
          </thead>
          <tbody>
            {course.map((cr, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
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

export default Courses;
