import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "../Pages/Home";
import About from "../Pages/About"
import FAQs from"../Pages/FAQs"
import Contactme from "../Pages/Home";
import ComingSoon from "../Pages/ComingSoon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Website() {
  return (
    <div>
      <Router>
         <Switch>
           <Route exact path="/">
             <Home/>
           </Route>
           <Route path="/FAQs">
             <FAQs/>
           </Route>
           <Route path="/About">
             <About/>
           </Route>
           <Route path="/ContactMe">
             <Contactme phoneNumber={911}/>
           </Route>
         </Switch>
       </Router>
    </div>
   );
 }

 function App() {
  return (
    <div>
      <Router>
         <Switch>
           <Route exact path="/">
            <ComingSoon/>
           </Route>
         </Switch>
       </Router>
    </div>
   );
 }

 export default App;
 