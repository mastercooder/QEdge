import React from 'react'

const Signup = () => {
  return (
    <div>
      <h3>Signup Page</h3>
        <form>
          <label htmlFor="">User Name</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Email Address :</label>
          <input type="email" name="" /> 
          <label htmlFor="">Password</label>
          <input type="password" name="password1" id="" />
          <label htmlFor="">Re-Type Password</label>
          <input type="password" name="password2" id="" />
          <input type="submit" value="SignUp" />
          <input type="reset" value="Cancel" />
      </form>
    </div>
  )
}

export default Signup;