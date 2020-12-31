import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Features from "./pages/Features";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <Switch>
      {/*Here we did put the route where we want the component to be displayed*/}

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
    </Switch>
  );
}
