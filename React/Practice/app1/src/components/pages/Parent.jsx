import React, { Component } from 'react'
import '../style/Parent.css'
import Child from './Child'
import ImgComp1 from './ImgComp1';
import ImgComp2 from './ImgComp2';

class Parent extends Component {
  constructor(){
    super();
    this.state={
      course: ''
    };
  }

  changeCourse = (cr) =>{
    this.setState(
      {course: cr}
    );
  }

  render() {
    return (
      <>
      <div className="Parent">
        <h1 className='Parent_Heading'>Parent</h1>
        <h3 className='Parent_Data'>Parent == {this.state.course}</h3>
      </div>
        <Child changeCourse={this.changeCourse}/>
        <ImgComp1/>
        <ImgComp2/>
      </>
    )
  }
}

export default Parent;