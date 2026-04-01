import React, { Component } from 'react'
import img1 from '../images/chris-ried-ieic5Tq8YMk-unsplash.jpg';
import img2 from '../images/christopher-gower-m_HRfLhgABo-unsplash.jpg';
import img3 from '../images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg';
import img4 from '../images/kent-chin-G9cPyZrVVkc-unsplash.jpg';

class ImgComp1 extends Component {
  render() {
    return (
      <div className='ImgComp1'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src="/favicon.ico"/>
      </div>
    )
  }
}

export default ImgComp1;