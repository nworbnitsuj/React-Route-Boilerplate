import React, { Component } from 'react';
import './App.css';
import Home from './home'
import Members from './members'
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
            <Link to="/Members">Members</Link>{" "}
          </nav>
            <Route exact path="/" component={Home}/>
            <Route path="/Members" component={Members}/>
          </div>
        </Router>
    );
  }
}

export default App;
