import React, { Component } from "react";
import "../style/StudentDashbord.css";
import SD_inputbox from "./SD_inputbox";
import SD_Display from "./SD_Display";

class StudentDashbord extends Component {
  constructor() {
    super();

    this.courseFee = {
      python: 12000,
      java: 14000,
      react: 13000,
    };

    this.state = {
      name: "",
      contact: "",
      course: "",
      students: [],
      editIndex: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.name !== "" &&
      this.state.contact !== "" &&
      this.state.course !== ""
    ) {
      const fee = this.courseFee[this.state.course] || 0;

      const currentStudent = {
        name: this.state.name,
        contact: this.state.contact,
        course: this.state.course,
        fee: fee,
      };

      if(this.state.editIndex !== null){
        const updateStudents = [...this.state.students];
        updateStudents[this.state.editIndex] = currentStudent;

        this.setState({
          students: updateStudents,
          name: '',
          contact: '',
          cousre: '',
          editIndex: null,
        });
      } else{
        this.setState({
          students: [...this.state.students, currentStudent],
          name: '',
          contact: '',
          course: '',
        });
      }
    }
  };

  readName = (e) => {
    this.setState({ name: e.target.value });
  };

  readContact = (e) => {
    this.setState({ contact: e.target.value });
  };

  selectCourse = (e) => {
    this.setState({ course: e.target.value });
  };

  deleteValue = (indexToDelete) => {
    const newStudents = this.state.students.filter(
      (stu, index) => index !== indexToDelete,
    );
    this.setState({ students: newStudents });
  };

  modifyvalue = (index) =>{
    const student = this.state.students[index];

    this.setState({
      name: student.name,
      contact: student.contact,
      course: student.course,
      editIndex: index,
    })
  }

  render() {
    return (
      <div className={this.props.className}>
        <h1 className="StudentDash_Heading">Entrollment Window</h1>

        <SD_inputbox
          handleSubmit={this.handleSubmit}
          readName={this.readName}
          readContact={this.readContact}
          selectCourse={this.selectCourse}
          name={this.state.name}
          contact={this.state.contact}
          course={this.state.course}
        />

        <SD_Display
          students={this.state.students}
          deleteValue={this.deleteValue}
          modifyvalue={this.modifyvalue}
        />
      </div>
    );
  }
}

export default StudentDashbord;
