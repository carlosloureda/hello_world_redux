import React from "react";
import { store } from "../store";
import { setName, fetchPhotoFromAPI } from "../actions";

import PropTypes from "prop-types";

class ButtonGroup extends React.Component {
  static propTypes = {
    names: PropTypes.array.isRequired
  };

  checkAndDispatch = (store, action) => {
    if (action.type === "SET_NAME" && action.name === "Carlos") {
      return alert("Don't be so self-centered");
    }
    store.dispatch(action);
  };

  onChangeName = e => {
    let query = e.target.dataset.name;
    store.dispatch(fetchPhotoFromAPI(query));
    this.checkAndDispatch(store, setName(query));
  };

  render() {
    const { names } = this.props;
    const state = store.getState();
    return (
      <div>
        <div className="btn-group">
          {names.map((name, i) => (
            <button
              key={i}
              className="btn btn-primary"
              data-name={name}
              onClick={this.onChangeName}
            >
              {name}
            </button>
          ))}
        </div>
        {state.photo_url && (
          <div className="image-block">
            <img src={state.photo_url} alt="example img" />
          </div>
        )}
      </div>
    );
  }
}

// const ButtonGroup = ({ names }) => (

// );

export default ButtonGroup;
