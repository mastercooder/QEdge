import React from "react";
import "../style/login.css";

const Login = () => {
  return (
    <div className="Login mt-5">
      <h3 className="mt-3">Login</h3>
      <div className="LoginInput">
        <label htmlFor="username">UserName: </label>
        <input type="text" name="username" id="" />
        <label htmlFor="">Password: </label>
        <input type="password" name="" id="" />
      </div>
      <div className="LoginButton">
        <button>Login</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default Login;
