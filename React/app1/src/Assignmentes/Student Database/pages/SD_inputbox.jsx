import React, { Component } from "react";

class SD_inputbox extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="SD_inputbox">
          <form onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              onChange={this.props.readName}
              value={this.props.name}
            />

            <input
              type="number"
              placeholder="Contact"
              onChange={this.props.readContact}
              value={this.props.contact}
            />

            <select onChange={this.props.selectCourse} value={this.props.course}>
              <option value="">Select Course</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="java">Java</option>
            </select>

            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SD_inputbox;
