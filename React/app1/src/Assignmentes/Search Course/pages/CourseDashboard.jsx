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
      allCourses: courseData,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { cname, fee, dur, allCourses } = this.state;

    let filtered = allCourses;

    // Filter by Course Name
    if (cname) {
      filtered = filtered.filter((course) =>
        course.name.toLowerCase().includes(cname.toLowerCase()),
      );
    }

    // Filter By Dration
    if (dur) {
      filtered = filtered.filter((course) => course.duration == dur);
    }

    // Filter by Fee (LESS THAN OR EQUAL)
    if (fee) {
      filtered = filtered.filter((course) => course.fee <= parseInt(fee));
    }

    // Update State
    this.setState({ courses: filtered });
  };

  // Reading Values
  readDuration = (e) => {
    this.setState({ dur: e.target.value });
  };
  readFee = (e) => {
    this.setState({ fee: e.target.value });
  };
  selectCourse = (e) => {
    this.setState({ cname: e.target.value });
  };

  render() {
    return (
      <div className="Course">
        <h1 className="Course_Heading">Course Details</h1>
        <UserInput 
        handleSubmit={this.handleSubmit}
        readDuration={this.readDuration}
        readFee={this.readFee}
        selectCourse={this.selectCourse}
        />
        <DisplayData courses={this.state.courses}/>
      </div>
    );
  }
}

export default CourseDashboard;
