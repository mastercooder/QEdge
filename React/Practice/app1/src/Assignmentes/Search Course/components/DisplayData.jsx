import React, { Component } from "react";

class DisplayData extends Component {
  render() {
    const { courses } = this.props;

    return (
      <div className="Cousre_Display">
        <table>
          <thead>
            <tr>
              <th>CID</th>
              <th>Course</th>
              <th>Fee</th>
              <th>Duration</th>
              <th>Trainer</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.cid}>
                <td>{course.cid}</td>
                <td>{course.name}</td>
                <td>{course.fee}</td>
                <td>{course.duration}</td>
                <td>{course.trainer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayData;
