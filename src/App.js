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
        <Tabs
        headers = {
        [
        {"title": "Tab 1", "content": "Hello World"},
        {"title": "Tab 2", "content": "Hello World Part 2"}
        ]}
        />
      </div>
    );
  }
}

export default App;
