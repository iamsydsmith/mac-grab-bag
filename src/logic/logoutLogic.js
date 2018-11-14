import { createLogic } from "redux-logic";
import history from "./../history";

const loginUser = createLogic({
  type: "LOGOUT_USER",
  latest: true,

  process: function({ getState, usersUrl }, dispatch, done) {
    dispatch({
      type: "SET_CURRENT_USER",
      payload: {}
    });

    history.push("/login");
  }
});

export default loginUser;
