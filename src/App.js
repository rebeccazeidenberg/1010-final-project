import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Nav from './Nav';
import Contact from './Contact';
import Submissions from './Submissions';
import Home from './Home';
import Login from './Login';
import Background from './pictures/background.jpeg';

function App() {
  return (
    <Router>
      <div>
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
            <Submissions />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function About() {
  return( 
  <div>
    <h2>About</h2>
      <div>{Background}</div>
  </div>
  )
}

function Portfolio() {
  return <h2>Portfolio</h2>
}




export default App;
