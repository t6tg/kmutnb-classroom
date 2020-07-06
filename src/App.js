import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/index";
import Add from "./pages/add";
import firebase from "firebase";
require("dotenv").config();

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "kmutnb-classroom.firebaseapp.com",
  projectId: "kmutnb-classroom",
});

export default function App() {
  return (
    <div className="container mx-auto mt-8">
      <center>
        <img src="logo.jpg" alt="logo" width="250" />
      </center>
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
