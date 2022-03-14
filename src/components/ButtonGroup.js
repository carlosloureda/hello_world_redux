import React from "react";
import { useDispatch } from "react-redux";
import { fetchPhotoFromAPI, setName } from "../actions";

const ButtonGroup = ({ names }) => {
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const query = e.target.dataset.name;
    dispatch(fetchPhotoFromAPI(query));
    dispatch(setName(query));
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
