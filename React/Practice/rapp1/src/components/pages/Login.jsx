import React from 'react'
import '../../css/login.css'

const Login = () => {
  return (
    <div className='Login mt-5'>
      <h3 className='text-center'>Login</h3>

      <div className='LoInput'>
        <form>
          <label>User Name</label>
          <input type="text" placeholder="Username" />

          <label>Password</label>
          <input type="password" placeholder="Password" />
        </form>
      </div>

      <div className='LoButton mt-5'>
        <input type="submit" value="Login" />
        <input type="reset" value="Cancel" />
      </div>
    </div>
  )
}

export default Login;