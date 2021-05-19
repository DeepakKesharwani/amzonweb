import React, { Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import Navbar from "./Navbar";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
};
export default App;
