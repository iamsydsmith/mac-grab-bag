import { createLogic } from "redux-logic";
import request from "axios";
import _ from "lodash";

function formatFamilyMembersNames(member) {
  if (member) {
    const familyNamesArray = _.split(member.family, ",").map(name => {
      return name.trim();
    });

    return Object.assign({}, member, { family: familyNamesArray });
  }
  return Object.assign({}, member, { family: [] });
}

const familyDataLogic = createLogic({
  type: "ADD_FAMILY_MEMBER",
  latest: true,

  process: function({ getState, familyUrl }, dispatch, done) {
    const { familyMember } = getState();

    const newfamilyMember = formatFamilyMembersNames(familyMember);

    return request
      .post(familyUrl, newfamilyMember)
      .then(() => {
        dispatch({ type: "CLEAR_FAMILY_MEMBER" });
      })
      .catch(err => {
        console.log(err);
        return err;
      })
      .finally(() => {
        done();
      });
  }
});

export default familyDataLogic;
