import React, { Component } from "react";
import img1 from "../images/chris-ried-ieic5Tq8YMk-unsplash.jpg";
import img2 from "../images/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import img3 from "../images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg";
import img4 from "../images/kent-chin-G9cPyZrVVkc-unsplash.jpg";

class ImgComp2 extends Component {
  constructor() {
    super();
    this.state = {
      images: [img1, img2, img3, img4],
    };
  }
  render() {
    return (
      <div className="ImgComp2">
        <div>
          {this.state.images.map((img, index) => (
            <img key={index} src={img} alt="img" className="img2"/>
          ))}
        </div>
      </div>
    );
  }
}

export default ImgComp2;
