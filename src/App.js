import React, { Component } from "react";
import HelloWorld from "./components/HelloWorld";
import ButtonGroup from "./components/ButtonGroup";
import reducer from "./reducers";
import { createStore } from "redux";

const initialState = { name: "Everyone" };
const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    const state = store.getState();
    return [
      <HelloWorld key={1} name={state.name} />,
      <ButtonGroup key={2} names={["Everyone", "Carlos", "from Redux"]} />
    ];
  }
}

export default App;
