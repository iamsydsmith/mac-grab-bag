import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { createLogicMiddleware } from "redux-logic";
import { Provider } from "react-redux";
import requestDataLogic from "./logic/requestDataLogic";
import familyDataLogic from "./logic/familyDataLogic";

import AddFamilyMemberForm from "./components/AddFamilyMemberForm.js";

const familyReducer = require("./reducers/familyReducer");
const familyUrl = "https://mac-grab-bag.herokuapp.com/family";

const deps = {
  familyUrl
};

const logicMiddleware = createLogicMiddleware(
  [requestDataLogic, familyDataLogic],
  deps
);

const store = createStore(familyReducer, applyMiddleware(logicMiddleware));

store.dispatch({ type: "DATA_REQUEST" });

ReactDOM.render(
  <Provider store={store}>
    <AddFamilyMemberForm />
  </Provider>,
  document.getElementById("root")
);
