import React, { Component } from 'react'
import Contax104 from './Contaxt104';

class Contax103 extends Component {
  render() {
    return (
      <div className="Contaxt_103">
        <h3>Contax103</h3>
        <Contax104 cname={this.props.cname}/>
      </div>
    )
  }
}

export default Contax103;