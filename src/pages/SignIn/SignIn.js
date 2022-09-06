import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignIn.scss";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
        console.log(authUser);
    }).catch(error => {
        console.log(error);
    }
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser) => {
        console.log(authUser);
    }).catch(error => {
        console.log(error);
    }
    );
  };

  return (
    <div className="signin">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={handleLogin} type="submit" className="signin__button">
          Sign In
        </button>
        <h4>
          <span className="signin--grey">New to Netflix? </span>
          <span onClick={handleRegister} className="signin--link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
