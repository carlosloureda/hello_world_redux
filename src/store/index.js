import reducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = { name: "Everyone" };
export const store = createStore(reducer, initialState, applyMiddleware(thunk));
