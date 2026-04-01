import React from 'react'

const Login = () => {
  return (
    <div>
      <h3>Login Here</h3>
      <form >
        <label htmlFor="">User Name</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" />
        <input type="submit" value="Login" />
        <input type="reset" value="Cancel" />
      </form>
    </div>
  )
}

export default Login;