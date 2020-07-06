import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/index";
import Add from "./pages/add";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exect={true} path="/" component={Index} />
        <Route exect={true} path="/add" component={Add} />
      </Switch>
    </Router>
  );
}
