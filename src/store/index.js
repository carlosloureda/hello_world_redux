import reducer from "../reducers";
import { applyMiddleware, createStore } from "redux";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("STATE BEFORE", store.getState());
  console.log("ACTION DISPATCHED", action);
  next(action);
  console.log("STATE AFTER", store.getState());
};

const validationMiddleware = (store) => (next) => (action) => {
  if (action.type === "SET_NAME" && action.name === "Carlos") {
    return alert("Don't be so self-centered");
  }
  next(action);
};

const initialState = { name: "Everyone" };

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(loggerMiddleware, validationMiddleware)
);
