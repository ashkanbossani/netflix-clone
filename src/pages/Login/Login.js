import React from "react";
import "./Login.scss";

function Login(props) {
  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="login-logo"
        />
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Login;
