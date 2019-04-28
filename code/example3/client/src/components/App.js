import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Dashboard from './Dashboard';
import About from './About';

class App extends Component {
  render () {
    return (
      <Router>
        <Route exact path ='/' component={Dashboard} />
        <Route exact path ='/about' component={About} />
      </Router>
    );
  }
}

export default App;
