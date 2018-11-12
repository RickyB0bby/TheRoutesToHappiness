import React, { Component } from 'react';
import { render } from 'react-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component{
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home Sweet Home</Link>
            </li>
            <li>
              <Link to="/happy">Happy Snowday Puppy</Link>
            </li>
            <li>
              <Link to="/sleepy">Sleepy Puppy</Link>
            </li>
            <li>
              <Link to="/guilty">Guilty Dog</Link>
            </li>
          </ul>
            <Route path="/happy" component={Happy} />
            <Route path="/sleepy" component={Sleepy} />
            <Route path="/guilty" component={Guilty} />
        </div>
      </Router>
    )
  }
}

render( <Home />, document.getElementById('root') );
