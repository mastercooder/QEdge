import React, { Component } from 'react'

export default class Comp2 extends Component{
    sid = 1001
    student = {
        sname: 'Tejesh',
        fee: 12000
    }
    constructor(){
        super()
        this.state = {
            cid: 5001,
            cname: 'Python',
            dur: 60
        }
    }
    render(){
        return(
            <div className={this.props.className}>
                <h3 style={{borderBottom: '5px solid black', paddingBottom: '30px'}}>Componenet - 2</h3>
                <h3>SID = {this.sid} | Name: {this.student.sname} | Fee: {this.student.fee}</h3>
                <h3>CID: {this.state.cid} | Course: {this.state.cname} | Duration: {this.state.dur}</h3>
            </div>
        );
    }
}