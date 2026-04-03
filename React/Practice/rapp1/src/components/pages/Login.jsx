import React from 'react'
import '../../css/login.css'
import { useLocation } from 'react-router-dom'


const Login = () => {
  
  const location = useLocation();

  return (
    <div className='Login mt-5'>
      <h3 className='text-center'>
        Login 
      </h3>
      <p className='login-status mb-1'>{location.state?.loginStatus}</p>

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