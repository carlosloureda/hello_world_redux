import React from "react";
import { store } from "../store";
import { setName } from "../actions";

import PropTypes from "prop-types";

const PEXELS_CLIENT_ID = "SET YOUR PEXEL ID";

class ButtonGroup extends React.Component {
  static propTypes = {
    names: PropTypes.array.isRequired
  };
  state = {
    photo: ""
  };

  checkAndDispatch = (store, action) => {
    if (action.type === "SET_NAME" && action.name === "Carlos") {
      return alert("Don't be so self-centered");
    }
    store.dispatch(action);
  };

  onChangeName = e => {
    let query = e.target.dataset.name;
    this.fetchPhotos(query);
    this.checkAndDispatch(store, setName(query));
  };

  fetchPhotos = query => {
    const options = {
      headers: {
        Authorization: PEXELS_CLIENT_ID
      }
    };
    const queryUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=1&page=1`;
    fetch(queryUrl, options)
      .then(response => response.json())
      .then(response => {
        if (
          response.total_results &&
          response.photos &&
          response.photos.length
        ) {
          let photo = response.photos[0].src.small;
          console.log("The photo url is: ", photo);
          this.setState({
            photo
          });
        } else {
          this.setState({
            photo: ""
          });
        }
      })
      .catch(error => {
        console.log("error: ", error);
      });
  };

  render() {
    const { names } = this.props;
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
        {this.state.photo && (
          <div className="image-block">
            <img src={this.state.photo} alt="example img" />
          </div>
        )}
      </div>
    );
  }
}

// const ButtonGroup = ({ names }) => (

// );

export default ButtonGroup;
