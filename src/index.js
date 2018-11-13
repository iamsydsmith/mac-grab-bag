import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { createLogicMiddleware } from "redux-logic";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken.js";
import userLogic from "./logic/userLogic";
import authReducer from "./reducers/authReducer";

import App from "./components/App";

// const authReducer = require("./reducers/authReducer");
const usersUrl = "https://mac-grab-bag.herokuapp.com/api/users";

const deps = {
  usersUrl
};

const logicMiddleware = createLogicMiddleware([userLogic], deps);

const store = createStore(authReducer, applyMiddleware(logicMiddleware));

store.dispatch({ type: "GET_INITIAL_STATE" });

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch({
    type: "SET_CURRENT_USER",
    value: decoded
  });

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch({
      type: "SET_CURRENT_USER",
      value: ""
    });
    window.location.href = "/login";
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
