import React, { useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            password: userAuth.password,
          })
        );
      } else {
        console.log("user is logged out");
        dispatch(logout);
      }
    });
    return unsubscribe;
  },[dispatch]);

  return (
    <>
      <div className="app">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
