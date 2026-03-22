import React, { Component } from "react";

export class comp3 extends Component {
  constructor(props) {
    super();
    this.state = {
      c_name: props.cname,
      c_id: props.cust_id,
    };
    console.log(props);
  }
  render() {
    return (
      <div>
        <h3>Componenet - 3</h3>
        <h3>
          Customer Name: {this.props.cname} || Customer ID: {this.props.cust_id}
        </h3>
        <h3>
          Customer Name: {this.state.c_name} || Customer ID: {this.state.c_id}
        </h3>
      </div>
    );
  }
}

export default comp3;
