import React, { Component } from "react";
import "../style/Course.css";
import courseData from "../data/courseData";
import UserInput from "../components/UserInput";
import DisplayData from "../components/DisplayData";


class CourseDashboard extends Component {
  constructor() {
    super();

    this.state = {
      cid: "",
      cname: "",
      fee: "",
      dur: "",
      trainer: "",
      courses: courseData,
    };
  }

  handleSubmit = (e) =>{
    e.preventDefault();
  }

  
  // Reading Values
  readDuration = (e) =>{
    this.setState({duration: e.target.value})
  }
  readFee = (e) =>{
    this.setState({fee: e.target.value})
  }
  selectCourse = (e) =>{
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div className="Course">
        <h1 className="Course_Heading">Course Details</h1>
        <UserInput
        handleSubmit={this.handleSubmit}
        />
        <DisplayData/>
      </div>
    );
  }
}

export default CourseDashboard;
