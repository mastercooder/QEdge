import React, { Component } from 'react';

class Image extends Component{
    render(){
        if(this.props.img === 'noImage'){
            throw new Error("Image Not Found")
        }
        return <img src={this.props.img} width={150} height={150}  className='img-fluid m-3 float-start'/>
    }
}

export default Image;