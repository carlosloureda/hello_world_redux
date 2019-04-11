import React from "react";

const ButtonGroup = ({ names }) => (
  <div className="btn-group">
    {names.map((name, i) => (
      <button key={i} className="btn btn-primary" data-name={name}>
        {name}
      </button>
    ))}
  </div>
);

export default ButtonGroup;
