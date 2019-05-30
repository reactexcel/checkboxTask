import { createStore, compose, applyMiddleware } from "redux";
import dropDownReducer from "./reducers/reducers";
import thunk from "redux-thunk";
const middleWare = [];

middleWare.push(thunk);
const store = createStore(
  dropDownReducer,
  {},
  compose(applyMiddleware(...middleWare))
);

export default store;
