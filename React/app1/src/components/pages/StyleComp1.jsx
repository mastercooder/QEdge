import React, { Component } from "react";
import StyleComp2 from './StyleComp2'
import StyleComp3 from "./StyleComp3";

class StyleComp1 extends Component {
  render() {
    const style1 = {
      color: "red",
      backgroundColor: "aqua",
    };

    const style2 = {
      color: "blue",
      fontSize: "25px",
    };
    return (
      <div className={this.props.className}>
        <h3 className="Sc_Title">Style Component</h3>
        <div className="Sc_1">
          {/* Inline CSS */}
          <h2>Applying CSS</h2>
          <h3 style={{ ...style1, ...{textTransform: 'lowercase'} }}>THIS SHOULD CHANGE COLOR</h3>
          <h3 style={{ ...style1, ...style2 }}>THIS SHOULD CHANGE COLOR</h3>
          <h3 style={style1}>THIS SHOULD CHANGE COLOR</h3>
          <h3
            style={{
              color: "blue",
              backgroundColor: "aquamarine",
              fontSize: "25px",
            }}
          >
            THIS SHOULD CHANGE COLOR
          </h3>
        </div>
        <div className="Sc_2">
            <StyleComp2/>
        </div>
        <div className="Sc_3">
            <StyleComp3/>
        </div>
      </div>
    );
  }
}

export default StyleComp1;
