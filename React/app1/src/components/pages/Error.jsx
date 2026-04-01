import React, { Component } from 'react';

class Error extends Component{
    constructor(){
        super();
        this.state={
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }
    render(){
        if(this.state.hasError){
            return <h6>Error: Image Not Found</h6>
        }
        return this.props.children;
    }
}

export default Error;