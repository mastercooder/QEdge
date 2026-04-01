import React, { Component } from "react";
import Contax103 from "./Contaxt103";

class Contax102 extends Component {
  render() {
    return (
      <div className="Contaxt_102">
        <h3>Contax102</h3>
          <Contax103 cname={this.props.cname} />
      </div>
    );
  }
}

export default Contax102;
