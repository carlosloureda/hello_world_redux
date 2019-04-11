import React, { Component } from "react";
import HelloWorld from "./components/HelloWorld";

import { createStore } from "redux";
const store = createStore(); // an incomplete solution

class App extends Component {
  state = {
    name: "Everyone"
  };
  render() {
    return <HelloWorld name={this.state.name} />;
  }
}

export default App;
