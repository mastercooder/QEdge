import React, { Component } from "react";
import "../style/ErrorBound.css";
import img1 from "../images/chris-ried-ieic5Tq8YMk-unsplash.jpg";
import img2 from "../images/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import img3 from "../images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg";
import img4 from "../images/kent-chin-G9cPyZrVVkc-unsplash.jpg";
import Image from "./Image";
import Error from "./Error";

class ErrorBound1 extends Component {
  render() {
    return (
      <div className="errorBound text-center">
        <h1 className="mb-4">ErrorBound1</h1>

        <Error>
          <Image img={img1} />
        </Error>
        <Error>
          <Image img={img2} />
        </Error>
        <Error>
          <Image img={img3} />
        </Error>
        <Error>
          <Image img={img4} />
        </Error>
        <Error>
          <Image img="noImage" />
        </Error>
      </div>
    );
  }
}

export default ErrorBound1;
