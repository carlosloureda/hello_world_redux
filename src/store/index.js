import reducer from "../reducers";
import { applyMiddleware, createStore } from "redux";

// Custom Middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("STATE BEFORE", store.getState());
  console.log("ACTION DISPATCHED", action);
  next(action);
  console.log("STATE AFTER", store.getState());
};

const initialState = { name: "Everyone" };

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(loggerMiddleware)
);
