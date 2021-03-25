import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Nav from './Nav';
import Contact from './Contact';
import Submissions from './Submissions';
import Home from './Home';
import Login from './Login';
import About from './About';
import Portfolio from './Portfolio';
import Cookies from 'js-cookie';

const isCookie = function() {
  const cookie = Cookies.get("token");
  return !!cookie;
}


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(isCookie());

  return (
    <Router>
      <div className="Pages">
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/submissions">
            {isLoggedIn ? <Submissions /> : <Redirect to="/login" />}           
          </Route>

          <Route path="/login">         
            <Login setIsLoggedIn={setIsLoggedIn} />
          </Route>
        
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      <footer>
        Rebecca Zeidenberg Copyright 2021
      </footer>
    </Router>
  );
}

export default App;
