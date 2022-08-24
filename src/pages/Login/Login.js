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
        <button className="login__button">Sign in</button>

        <div className="login__gradient"></div>
      </div>
      <div className="login__body">
        <>
            <h1>
               Unlimited films, TV programmes and more. 
            </h1>
            <h2>
                Watch anywhere. Cancel at anytime.
            </h2>
            <h3> 
                Ready to wacth? enter your email to create or restart your membership.
            </h3>

            <div className="login__input">
                <form>
                    <input type="email" placeholder="Email Address" />
                    <button className="login__getstarted">GET STARTED</button>
                </form>
            </div>
        </>
    </div>
    </div>
  );
}

export default Login;
