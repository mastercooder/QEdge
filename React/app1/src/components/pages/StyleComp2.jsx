import React, { Component } from "react";

class StyleComp2 extends Component {
    constructor(){
        super()
        this.state = {
            backgroundColor:'' 
        }
    }

    addColor = (color) =>{
        this.setState(
            {backgroundColor: color}
        )
    }
  render() {
    const style1={
        backgroundColor: this.state.backgroundColor
    }
    return (
      <div className="Sc_2_main">
        <h2>Change Color</h2>
        <div className="ChangeColor" style={style1}></div>
        <div className="ChangeColor_buttons">
            <button onClick={() => {this.addColor("red")}} className="ColorButton">Red</button>
            <button onClick={() => {this.addColor("blue")}} className="ColorButton">Blue</button>
            <button onClick={() => {this.addColor("green")}} className="ColorButton">Green</button>
        </div>
      </div>
    );
  }
}

export default StyleComp2;
