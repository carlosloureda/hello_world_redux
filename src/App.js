import React from "react";
import HelloWorld from "./components/HelloWorld";

const App = () => {
  const [state] = React.useState({ name: "Everyone" });
  return <HelloWorld name={state.name} />;
};

export default App;
