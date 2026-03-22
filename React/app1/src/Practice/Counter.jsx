import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cnt: 0,
    };
  }

  // Event Handler
  incrementCnt = () => {
    this.setState(
        {cnt: this.state.cnt + 1}
    )
  };

 decrementCnt = () => {
    if(this.state.cnt > 0){
        this.setState(
            {cnt: this.state.cnt - 1}
        )
    } 
 };

  render() {
    return (
      <div className={this.props.className}>
        <h3>Counter: {this.state.cnt}</h3>

        <div className="div_btn">
          <button
            onClick={this.incrementCnt}
          >
            Increment
          </button>
          <button
          onClick={this.decrementCnt}
          disabled={this.state.cnt==0}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
