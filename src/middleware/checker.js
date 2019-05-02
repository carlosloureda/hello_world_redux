const checker = store => next => action => {
  if (action.type === "SET_NAME" && action.name === "Carlos") {
    return alert("Don't be so self-centered");
  }
  next(action);
};

export default checker;
