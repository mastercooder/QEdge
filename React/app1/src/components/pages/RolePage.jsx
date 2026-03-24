import React, { Component } from 'react'

class RolePage extends Component {
  render() {
    return (
      <div>
        <h3>I am {this.props.role} and my name is {this.props.name}</h3>
      </div>
    )
  }
}

export default RolePage;