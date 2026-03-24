import React, { Component } from 'react'

class Student2 extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>Student 2 Page{this.props.children}</h2>
    </div>
    )
  }
}

export default Student2;