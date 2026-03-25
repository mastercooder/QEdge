import React, { Component } from "react";
import "../CSS/Course.css";

class Course extends Component {
  constructor() {
    super();

    this.courseInfo = {
      'python': [80, 12000, 'Tejesh'],
      'react': [60, 8000, 'Patel'],
    };

    this.state = {
      cid: "",
      cname: "",
      fee: "",
      dur: "",
      trainer: "",
      courses: [],
    };
  }
  render() {
    return (
      <div className="Course">
        <h1 className="Course_Heading">Course Details</h1>
        <form className="Course_Input">
          <input type="text" name="" placeholder='Course Name'/>
          <input type="text" name="" placeholder='Fee'/>
          <select>
            <option value=''>Select Course</option>
            <option value='Python'>Python</option>
            <option value='React'>React</option>
            <option value='JavaScripts'>JavaScripts</option>
          </select>
          <button>Submit</button>

        </form>
        <div className="Cousre_Display">
          <table>
            <thead>
              <tr>
                <th>CID</th>
                <th>Course</th>
                <th>Fee</th>
                <th>Duration</th>
                <th>Trainer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001</td>
                <td>Python</td>
                <td>12000</td>
                <td>80</td>
                <td>Tejesh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Course;
