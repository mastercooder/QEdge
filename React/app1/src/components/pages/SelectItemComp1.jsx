import React, { Component } from "react";
import "../style/SelectItemComp1.css";

class SelectItemComp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cname: "",
      courses: [],
    };
  }

  selectCourse = (e) => {
    this.setState({ cname: e.target.value });
  };

  addCourses = () => {
    if (this.state.cname !== "") {
      this.setState({
        courses: [...this.state.courses, this.state.cname],
        cname: "",
      });
    }
    console.log(this.state.courses);
  };

  deleteCourse = (indexToDelete) => {
    const newCourse = this.state.courses.filter(
      (cr, index) => index != indexToDelete,
    );
    this.setState({ courses: newCourse });
  };
  render() {
    return (
      <div className={this.props.className}>
        <h1 className="SelectItemComp1_heading">Select Item</h1>
        <div className="SelectItem_inputbox">
          <label htmlFor="">Course: </label>
          <select onChange={this.selectCourse} value={this.state.cname}>
            <option value="">Select Course</option>
            <option value="Python">Python</option>
            <option value="React">React</option>
            <option value="Next JS">Next JS</option>
            <option value="Django">Django</option>
            <option value="Fast API">Fast API</option>
          </select>
          <button onClick={this.addCourses}>Add</button>
          <table className="crTable">
            <thead>
              <tr>
                <td>CID</td>
                <td>COURSE</td>
                <td>ACTIONS</td>
              </tr>
            </thead>
            <tbody>
              {this.state.courses.map((cr, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{cr}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.deleteCourse(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SelectItemComp1;
