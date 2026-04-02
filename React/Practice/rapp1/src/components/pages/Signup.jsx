import React from "react";
import "../../css/signup.css";

const Signup = () => {
  return (
    <div className="SignUp mt-5">
      <h3 className="m-2 text-center">Sign-Up</h3>
      <div className="SiInput">
        <form className="mt-3">
          <label htmlFor="">User Name</label>
          <input type="text" name="" placeholder="Username" />
          <label htmlFor="">Email Address :</label>
          <input type="email" name="" placeholder="Email" />
          <label htmlFor="">Password</label>
          <input type="password" name="password1" placeholder="Password" />
          <label htmlFor="">Re-Type Password</label>
          <input
            type="password"
            name="password2"
            placeholder="Re-Type Password"
          />
        </form>
      </div>

      <div className="SiButton m-4">
        <button>SignUp</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default Signup;
