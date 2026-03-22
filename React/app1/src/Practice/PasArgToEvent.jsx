import React, { Component } from "react";

export class PasArgToEvent extends Component {
  constructor() {
    super();
    this.state = {
      cname: "",
    };
  }

  showCourse = (cr) => {
    this.setState(
        {cname: cr}
    );
  };

  evenHandler = (e) => {
    this.showCourse(e.target.innerHTML);
  }


  render() {
    return (
      <div className={this.props.className}>
        {/* <h3>PasArgToEvent</h3> */}
        <h3>Course Name: {this.state.cname}</h3>
        <button onClick={this.evenHandler}>Python</button>
        <button onClick={this.evenHandler}>Java</button>
        <button onClick={this.evenHandler}>React</button>
      </div>
    );
  }
}

export default PasArgToEvent;
