import React, { Component } from "react";

class Child extends Component {
  constructor(){
    super();
    this.state={
      cname: ''
    };
  }

  addCourse = (e) =>{
    this.setState(
      {cname: e.target.value}
    )
  }

  render() {
    return (
      <div className="Child">
        <h3>Child</h3>
        <input type="text" value={this.state.cname} placeholder="Course Name" onChange={this.addCourse}/>
        <button
          onClick={() => {
            this.props.changeCourse(this.state.cname);
          }}
          className="Child_Button"
        >
          SendDataToParent
        </button>
      </div>
    );
  }
}

export default Child;
