import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
   <div>
     <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/FAQs">
            <div>FAQ Placeholder</div>
          </Route>
          <Route path="/About">
            <div>About Placeholder</div>
          </Route>
          <Route path="/Contactme">
            <div>Contact Me Placeholder</div>
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
