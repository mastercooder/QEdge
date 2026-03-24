import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>User Page: {this.props.userName}</div>
    )
  }
}

export default User