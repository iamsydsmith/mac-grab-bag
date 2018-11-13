import { createLogic } from "redux-logic";
import request from "axios";
import history from "./../history";

const registerUser = createLogic({
  type: "ADD_USER",
  latest: true,

  process: function({ getState, usersUrl }, dispatch, done) {
    const { user } = getState();

    return request
      .post(usersUrl + "/register", user)
      .then(res => {
        history.push("/login");
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

export default registerUser;
