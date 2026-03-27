import React, { Component } from "react";
import "../style/BsComp.css";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

class BsComp1 extends Component {
  render() {
    return (
      <div className="BsComp1 bootstrap-scope">
        <h1 className="BsComp1_Heading">BootStrap</h1>
        <div>
          <button type="button" class="btn btn-outline-primary">
            Primary
          </button>
          <button type="button" class="btn btn-outline-secondary">
            Secondary
          </button>
          <button type="button" class="btn btn-outline-success">
            Success
          </button>
          <button type="button" class="btn btn-outline-danger">
            Danger
          </button>
          <button type="button" class="btn btn-outline-warning">
            Warning
          </button>
          <button type="button" class="btn btn-outline-info">
            Info
          </button>
          <button type="button" class="btn btn-outline-light">
            Light
          </button>
          <button type="button" class="btn btn-outline-dark">
            Dark
          </button>
        </div>
      </div>
    );
  }
}

export default BsComp1;
