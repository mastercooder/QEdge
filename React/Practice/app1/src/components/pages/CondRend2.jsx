import React, { Component } from 'react'
import RolePage from './RolePage';
import Guest from './Guest';

class CondRend2 extends Component {
    constructor(){
        super()
        this.state={
            admin: {'name': 'MasterCoder'},
            developer: {'name': 'Tejesh'},
            manager: {'name': 'Patel'}
        }
    }
  render() {
    let role = 'admin';
    let page;
    switch(role){
        case 'admin':
        case 'developer':
        case 'manager':
            page = <RolePage role={role} name={this.state[role].name}/>;
            break;

        default:
            page = <Guest role={Guest} name={""}/>;
            break;
    }
    return (
      <div>
        <h3>Login Page - 2</h3>
        {page}
      </div>
    )
  }
}

export default CondRend2