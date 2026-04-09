import React from 'react'
import '../../assets/style/signup.css'

const SignUp = () => {
  return (
    <div className='SignUp mt-5'>
        <h3 className='text-center mt-4'>SignUp</h3>
        <div className="SignupInput">
          <label htmlFor="">Name: </label>
          <input type="text" name="" id="" />

          <label htmlFor="">Email</label>
          <input type="email" name="" id="" />

          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
          
          <label htmlFor="">Re-Type Password</label>
          <input type="Re-password" name="" id="" />
        </div>

        <div className="SignupButton m-4">
          <button>Sing-In</button>
          <button>Cancel</button>
        </div>
    </div>
  )
}

export default SignUp;