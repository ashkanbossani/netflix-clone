import React from "react";
import "./SignIn.scss";

function SignIn() {
  return (
    <div className="signin">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="signin__button">
          Sign In
        </button>
        <h4>
          <span className="signin--grey">New to Netflix? </span>
          <span className="signin--link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
