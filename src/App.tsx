import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Landing } from "./page/Landing";
import Auth from "./page/auth";

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route component={Landing} path="/" />
        <Route
          path="/login"
          render={(props) => <Auth {...props} router="/login" />}
        />
      </Switch></div>
    </Router>
  );
}

export default App;
