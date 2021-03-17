import React from "react";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import Chats from "./components/Chats/Chats";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import DogApi from "./DogApi";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:pet">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/dogs">
            <h1>Meet Our Latest Adoptees</h1>
            <DogApi />
          </Route>
          <Route path="/">
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
