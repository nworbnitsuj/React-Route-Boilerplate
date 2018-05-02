import React, { Component } from 'react';
import './App.css';
import Home from './home'
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
          <nav>
            <Link to="/">Home</Link>{" "}
          </nav>
            <Route exact path="/" component={Home}/>
          </div>
        </Router>
    );
  }
}

export default App;
