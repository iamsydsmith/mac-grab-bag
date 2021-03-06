import { createLogic } from "redux-logic";
import request from "axios";

const requestDataLogic = createLogic({
  type: "DATA_REQUEST",
  latest: true,

  processOptions: {
    successType: value => ({ type: "DATA_RECEIVE", payload: value }),
    failType: "DATA_RECEIVE_INVALID"
  },

  process: function({ getState, familyUrl }) {
    return request.get(familyUrl).then(resp => {
      const results = {
        data: resp.data
      };
      return results;
    });
  }
});

export default requestDataLogic;
