import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tab from "./components/Tab";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab>
              <a>Home</a>
            </Tab>
            <Tab>
              <a>About</a>
            </Tab>
            <Tab>
              <a>Features</a>
            </Tab>
          </div>

          <div className="viewport">
            {/*Here we did put the route where we want the component to be displayed*/}
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/features">
              <Features />
            </Route>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
