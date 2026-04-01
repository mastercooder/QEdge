import React, { Component, createContext } from "react";
import "../style/Contaxt101.css";
import Contax102 from "./Contaxt102";

export const MyContaxt = createContext();

class Contax101 extends Component {
  constructor(){
    super();
    this.state={
      sid: 1001,
      sname: 'Tejesh',
      course: 'Next JS',
      fee: 2500,
    };
  }

  incrementFee = () =>{
    this.setState(
      {fee: this.state.fee+50}
    )
  }
  render() {
    const contaxtData = {
      data: this.state,
      incrementFee: this.incrementFee
    }
    return (
      <div className="Contaxt_101">
        <h1 className="Contaxt101_Heading">Contaxt</h1>
        <MyContaxt.Provider value={contaxtData}>
          <Contax102/>
        </MyContaxt.Provider>
      </div>
    );
  }
}

export default Contax101;
