import React from "react";
import { createStore } from "redux";

import HelloWorld from "./components/HelloWorld";
import reducer from "./reducers";

const initialState = { name: "Everyone" };
const store = createStore(reducer, initialState);

const App = () => {
  const [state] = React.useState({ name: "Everyone" });
  return <HelloWorld name={state.name} />;
};

export default App;
