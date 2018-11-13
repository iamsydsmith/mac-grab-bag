import { createLogic } from "redux-logic";
import request from "axios";
import history from "./../history";

const loginUser = createLogic({
  type: "LOGIN_USER",
  latest: true,

  process: function({ getState, usersUrl }, dispatch, done) {
    const { user } = getState();

    return request
      .post(usersUrl + "/login", user)
      .then(res => {
        history.push("/home");
        done();
      })
      .catch(err => {
        dispatch({
          type: "GET_ERRORS",
          payload: err.message
        });
        done();
      });
  }
});

export default loginUser;
