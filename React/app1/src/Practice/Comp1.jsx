import React, { Component } from "react";
import Comp3 from "./Comp3";

class Comp1 extends Component {
  sid = 1001;
  student = {
    sname: "Tejesh",
  };
  render() {
    return (
      <div className={this.props.className}>
        <h3 style={{borderBottom: '5px solid black', paddingBottom: '30px'}}>Componenet - 1</h3>
        <Comp3 cust_id={7001} cname={"Tejesh"}></Comp3>
      </div>
    );
  }
}

export default Comp1;
