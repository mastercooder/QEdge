import React, { Component } from "react";

class SD_Display extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="SD_Display">
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Course</td>
                <td>Fee</td>
                <td>Action</td>
              </tr>
            </thead>

            <tbody>
              {this.props.students.map((stu, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{stu.name}</td>
                  <td>{stu.contact}</td>
                  <td>{stu.course}</td>
                  <td>{stu.fee}</td>
                  <td>
                    <button
                      className="SD_btn"
                      onClick={() =>{
                        this.props.deleteValue(index)
                      }}
                    >
                      Delete
                    </button>
                    <button 
                    className="SD_btn"
                    onClick={() => {
                      this.props.modifyvalue(index)
                    }}
                    >
                      Modify</button>
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

export default SD_Display;
