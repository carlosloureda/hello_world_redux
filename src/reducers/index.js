import { SET_NAME, ADD_PHOTO } from "../actions";
export default (state, action) => {
  console.log("action:", action);
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name
      };
    case ADD_PHOTO:
      return {
        ...state,
        photo_url: action.photo_url
      };
    default:
      return state;
  }
};
