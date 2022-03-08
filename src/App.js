import React from "react";
import { createStore } from "redux";

import HelloWorld from "./components/HelloWorld";
import reducer from "./reducers";
import ButtonGroup from "./components/ButtonGroup";

const initialState = { name: "Everyone" };
const store = createStore(reducer, initialState);

const App = () => {
  const state = store.getState();
  return [
    <HelloWorld key={1} name={state.name} />,
    <ButtonGroup key={2} names={["Everyone", "Carlos", "from Redux"]} />,
  ];
};

export default App;
