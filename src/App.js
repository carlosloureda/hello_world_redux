import React from "react";

import HelloWorld from "./components/HelloWorld";
import ButtonGroup from "./components/ButtonGroup";

import { store } from "./store";

const App = () => {
  const state = store.getState();
  return [
    <HelloWorld key={1} name={state.name} />,
    <ButtonGroup key={2} names={["Everyone", "Carlos", "from Redux"]} />,
  ];
};

export default App;
