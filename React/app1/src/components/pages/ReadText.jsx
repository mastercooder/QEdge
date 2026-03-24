import React, { Component } from "react";
import "../CSS/ReadText.css";
import SelectItemComp1 from "./SelectItemComp1";

class ReadText extends Component {
  constructor() {
    super();
    this.state = {
      cname: "",
      courses: [],
    };
  }

  readCourse = (e) => {
    this.setState({ cname: e.target.value });
  };

  addCourses = () => {
    if (this.state.cname.length !== 0) {
      this.setState({
        courses: [...this.state.courses, this.state.cname],
        cname: "",
      });
    }
    console.log(this.state.courses);
  };

  deleteCourse = (indexToDelete) => {
    const newCourse = this.state.courses.filter(
        (cr, index) => index != indexToDelete
    )
    this.setState(
        {courses: newCourse}
    )
  };
  render() {
    return (
      <div className={this.props.className}>
        <h1 className="ReadText_heading">Read Text</h1>
        <div className="input_box_1">
          <label htmlFor="">Course: </label>
          <input
            type="text"
            name=""
            onChange={this.readCourse}
            value={this.state.cname}
          />
          <button onClick={this.addCourses}>Add</button>
          <ul>
            {this.state.courses.map((cr, index) => (
              <li key={index}>
                {cr} <button onClick={() => {this.deleteCourse(index)}}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="input_box_2">
            <SelectItemComp1/>
        </div>
      </div>
    );
  }
}

export default ReadText;
