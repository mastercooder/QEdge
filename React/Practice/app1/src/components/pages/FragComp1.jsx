import React, { Component } from "react";
import "../style/FragComp1.css";
import FragComp2 from "./FragComp2";

class FragComp1 extends Component {
  render() {
    return (
      <>
        <div className={`Frag_Comp ${this.props.className || ""}`}>
          <h1 className="FragComp_Heading">FragComp1</h1>
          <FragComp2 />
        </div>
      </>
    );
  }
}

export default FragComp1;
