import React, { useState } from "react";
import Fcomp7 from "./Fcomp7";
import Fcomp8 from "./Fcomp8";

const Fcomp6 = () => {
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);

  const addCourse = () => {
    if (course.trim() === "") return;
    setCourses([...courses, course]);
    setCourse("");
  };
  const deleteCourse = (index) => {
    const updateCourses = courses.filter((_, i) => i !== index);
    setCourses(updateCourses);
  };
  return (
    <>
      <div className={`Fcomp6 text-center ${prompt.className}`}>
        <h1 className="Fcomp6Header">Fcomp6</h1>
        <h3>List of Courses</h3>
        <input
          type="text"
          value={course}
          placeholder="Enter Course Name"
          onChange={(e) => {
            setCourse(e.target.value);
          }}
          className="mt-2 me-3"
        />
        <button onClick={addCourse}>Add</button>
        <ul>
          {courses.map((cr, index) => {
            return (
              <li key={index} className="mt-3">
                {cr} <button onClick={() => deleteCourse(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
        <Fcomp7 className="Fcomp7 text-center" />
        <Fcomp8 className="Fcomp8" />
      </div>
    </>
  );
};

export default Fcomp6;
