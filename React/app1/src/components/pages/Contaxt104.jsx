import React, { Component } from "react";
import { MyContaxt } from "./Context101";

class Contax104 extends Component {
  render() {
    return (
      <div className="Contaxt_104">
        <h3>Contax104</h3>
        <MyContaxt.Consumer>
          {({ data, incrementFee }) => (
            <div>
              <h3>ID: {data.sid}</h3>
              <h3>Name: {data.sname}</h3>
              <h3>Course: {data.course}</h3>
              <h3>Fee: {data.fee}</h3>
              <button onClick={incrementFee}>Fee Increment Button</button>
            </div>
          )}
        </MyContaxt.Consumer>
        {/* <h3>Course Name: {this.props.cname}</h3> */}
      </div>
    );
  }
}

export default Contax104;
