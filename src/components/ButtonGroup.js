import React from "react";
import { store } from "../store";
import { fetchPhotoFromAPI, setName } from "../actions";

const ButtonGroup = ({ names }) => {
  const onChangeName = (e) => {
    const query = e.target.dataset.name;
    store.dispatch(fetchPhotoFromAPI(query));
    store.dispatch(setName(query));
  };
  return (
    <div className="btn-group">
      {names.map((name, i) => (
        <button
          key={i}
          className="btn btn-primary"
          data-name={name}
          onClick={onChangeName}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
