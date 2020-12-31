import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Header />

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
