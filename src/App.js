import React, { Component } from "react";
import "./App.css";
import Clock from "./clock";
import Tabs from "./tabs";
import AutoComplete from "./autocomplete";
import "./stylesheets/index.css";

class App extends Component {
  render() {
    return (
      <div>
        <AutoComplete names={["John", "Joe", "Abby", "Anna", "Zyzzbra"]} />
        <Clock />
        <Tabs
          headers={[
            { title: "Tab 1", content: "Hello World" },
            { title: "Tab 2", content: "Hello World Part 2" }
          ]}
        />
      </div>
    );
  }
}

export default App;
