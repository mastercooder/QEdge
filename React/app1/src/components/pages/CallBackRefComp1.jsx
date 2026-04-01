import React, { Component } from 'react'
import '../style/CallBackRefComp1.css'

class CallBackRefComp1 extends Component {
    constructor(){
        super();
        this.inputRef = null;
    }

    componentDidMount(){
        console.log(this.inputRef);
        this.inputRef.focus();
    }
  render() {
    return (
      <div className='callBackRefComp'>
        <h1>Callback Reference Compound</h1>
        <form>
            <input ref={(element) => {this.inputRef=element}} type="text" placeholder='Enter User Name'/>
            <input type="password" placeholder='Enter Password'/>
            <button type='submit' className='btn btn-sm btn-primary'>Login</button>
        </form>
      </div>
    )
  }
}

export default CallBackRefComp1;