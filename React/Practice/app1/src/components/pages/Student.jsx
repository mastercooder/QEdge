import React, { Component } from 'react'
import Student2 from './Student2';

class Student extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1>Student Login{this.props.children}</h1>
        <Student2></Student2>
    </div>
    )
  }
}

export default Student;