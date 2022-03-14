const reducer = (state, action) => {
  console.log("action:", action);
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "ADD_PHOTO":
      return {
        ...state,
        photo_url: action.photo_url,
      };
    default:
      return state;
  }
};
export default reducer;
