import React, { Component } from "react";

class FragComp2 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={this.props.className}>
          <h1>FragComp2</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default FragComp2;
