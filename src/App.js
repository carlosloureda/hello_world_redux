import React from "react";
import { useSelector } from "react-redux";

import HelloWorld from "./components/HelloWorld";
import ButtonGroup from "./components/ButtonGroup";

const App = () => {
  const { name } = useSelector((state) => state);
  return [
    <HelloWorld key={1} name={name} />,
    <ButtonGroup
      key={2}
      names={["Everyone", "Carlos", "from Redux", "Cats"]}
    />,
  ];
};

export default App;
