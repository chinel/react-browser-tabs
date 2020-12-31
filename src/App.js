import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Tab from "./components/Tab";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab>
              <NavLink to="/" activeClassName="is-active" exact={true}>
                Home
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to="/about" activeClassName="is-active">
                About
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to="/features" activeClassName="is-active">
                Features
              </NavLink>
            </Tab>
          </div>

          <div className="viewport">
            {/*Here we did put the route where we want the component to be displayed*/}
            <Switch>
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
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
