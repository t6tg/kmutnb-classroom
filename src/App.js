import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/index";
import Add from "./pages/add";

export default function App() {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        <img src="logo.jpg" alt="logo" width="250" />
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/add" component={Add} />
          <Route exact path="*" component={Index} />
        </Switch>
      </Router>
    </div>
  );
}
