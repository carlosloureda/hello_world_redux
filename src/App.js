import React from "react";
import { createStore } from "redux";

import HelloWorld from "./components/HelloWorld";
import reducer from "./reducers";

const store = createStore(reducer);

const App = () => {
  const [state] = React.useState({ name: "Everyone" });
  return <HelloWorld name={state.name} />;
};

export default App;
