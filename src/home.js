import React, { Component } from 'react';
import './App.css';
import gaImg from './genAssem.jpg'
import logo from './logo.svg'

class Home extends Component {
  render() {
    return (
    <div>
      <h1>General Assembly WDI - Austin</h1>
      <img src={gaImg} />
      <img src={logo} />
      </div>
    );
  }
}

export default Home;
