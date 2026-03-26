import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";
import "../style/CondRend.css";
import CondRend2 from "./CondRend2";

class CondRend extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Tejesh",
    };
  }
  render() {
    let isLoggedIn = true;
    return (
      <div className={this.props.className}>
        <h1 className="CondRend_Heading">Conditional Render</h1>
        <div className="CondRand_1">
          <h3>Login Page - 1</h3>
          {isLoggedIn ? <User userName={this.state.userName} /> : <Guest />}
        </div>
        <div className="CondRand_2">
          <CondRend2 />
        </div>
      </div>
    );
  }
}

export default CondRend;
