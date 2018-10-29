import React, { Component } from 'react';
import './App.css';
import Weather from './weather';
import Clock from './clock';
import Tabs from './tabs';
import './stylesheets/index.css';

class App extends Component {

  render() {
    return (
      <div>
        <Weather />
        <Clock />
        <Tabs />
      </div>
    );
  }
}

export default App;
