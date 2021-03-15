import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import Likes from "./components/Likes/Likes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Likes">
            <Header backButton="/" />
            <Likes />
          </Route>
          <Route path="/matches">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
