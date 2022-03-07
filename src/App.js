import React from "react";
import HelloWorld from "./components/HelloWorld";

import { createStore } from "redux";
const store = createStore(); // an incomplete solution

const App = () => {
  const [state] = React.useState({ name: "Everyone" });
  return <HelloWorld name={state.name} />;
};

export default App;
