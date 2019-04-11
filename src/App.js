import React, { Component } from "react";
import HelloWorld from "./components/HelloWorld";

import reducer from "./reducers";
import { createStore } from "redux";

const initialState = { name: "Everyone" };
const store = createStore(reducer, initialState);

class App extends Component {
  state = {
    name: "Everyone"
  };
  render() {
    return <HelloWorld name={this.state.name} />;
  }
}

export default App;
