import React, { Component } from 'react'

class UserInput extends Component {
  render() {
    return (
      <div>
        <form className="Course_Input" onSubmit={this.props.handleSubmit}>
          <input type="text" name="" placeholder='Duration (in months)'/>
          <input type="text" name="" placeholder='Fee'/>
          <select>
            <option value=''>Select Course</option>
            <option value='Python'>Python</option>
            <option value='PythonFs'>Python Full Stack</option>
            <option value='PythonFsAi'>Python Full Stack with AI</option>
            <option value='HTML'>HTML</option>
            <option value='CSS'>CSS</option>
            <option value='JavaSc'>JavaScripts</option>
            <option value='React'>React</option>
            <option value='Bootstrap'>Bootstrap</option>
            <option value='NodeJs'>Node Js</option>
            <option value='Django'>Django</option>
            <option value='cLang'>C / C++</option>
            <option value='Java'>Java</option>
            <option value='SQL'>SQL</option>
            <option value='SAP'>SAP</option>
          </select>
          <button>Search</button>
        </form>
      </div>
    )
  }
}

export default UserInput;