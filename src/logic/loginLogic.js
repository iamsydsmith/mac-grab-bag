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
        dispatch({
          type: "SET_CURRENT_USER",
          payload: res.data.user
        });
        history.push("/");
        done();
      })
      .catch(err => {
        dispatch({
          type: "SET_ERRORS",
          payload: err.response.data
        });
        done();
      });
  }
});

export default loginUser;
