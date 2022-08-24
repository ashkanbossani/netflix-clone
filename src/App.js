import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
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
