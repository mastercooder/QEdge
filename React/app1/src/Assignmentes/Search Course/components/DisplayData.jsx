import React, { Component } from 'react'

class DisplayData extends Component {
  render() {
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
              <tr>
                <td>{this.props.cid}</td>
                <td>Python</td>
                <td>12000</td>
                <td>80</td>
                <td>Tejesh</td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  }
}

export default DisplayData;