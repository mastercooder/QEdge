import React from "react";
import '../assets/style/course.css'
import { useState } from "react";
import CourseBar from "../components/CourseBar";

const CourseGallery = () => {
  const [form, setForm] = useState({
    course: "",
    duration: "",
    fee: "",
    trainer: "",
  });

  const [course, setCourse] = useState([]);

  const handChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addCourse = (e) => {
    if(!form.course || !form.duration || !form.fee || !form.trainer) return;
    setCourse([...course, form]);
    setForm({
      course: "",
      duration: "",
      fee: "",
      trainer: "",
    });
  };

  return (
    <div className="Course">
      <h3 className="text-center mt-3">Course</h3>
      <CourseBar/>

      <div className="userInput mt-5">
        <input
          type="text"
          name="course"
          placeholder="Course"
          onChange={handChange}
        />
        <input
          type="number"
          name="duration"
          id=""
          placeholder="Duration"
          onChange={handChange}
        />
        <input
          type="number"
          name="fee"
          id=""
          placeholder="Fee"
          onChange={handChange}
        />
        <input
          type="text"
          name="trainer"
          id=""
          placeholder="Trainer"
          onChange={handChange}
        />
        <button onClick={addCourse}>Add</button>
        <button>Cancel</button>
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

export default CourseGallery;
