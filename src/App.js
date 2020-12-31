import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </Tab>
            <Tab>
              <Link to="/about">About</Link>
            </Tab>
            <Tab>
              <Link to="/features">Features</Link>
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
