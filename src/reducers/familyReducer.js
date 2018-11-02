const defaultState = {
  family: [],
  familyMember: {
    name: "",
    email: "",
    family: ""
  }
};

function familyReducer(state = defaultState, action) {
  switch (action.type) {
    case "DATA_RECEIVE": {
      return Object.assign({}, state, {
        family: action.payload.data
      });
    }

    case "DATA_REQUEST": {
      return Object.assign({}, state, {
        isLoading: true
      });
    }

    case "DATA_RECEIVE_INVALID": {
      return Object.assign({}, state, {
        lastChecked: Date.now(),
        isLoading: false
      });
    }

    case "ADD_FAMILY_MEMBER_NAME": {
      const familyMember = Object.assign({}, state.familyMember, {
        name: action.value
      });
      return Object.assign({}, state, { familyMember });
    }

    case "ADD_FAMILY_MEMBER_EMAIL": {
      const familyMember = Object.assign({}, state.familyMember, {
        email: action.value
      });
      return Object.assign({}, state, { familyMember });
    }

    case "ADD_FAMILY_MEMBER_FAMILY": {
      const familyMember = Object.assign({}, state.familyMember, {
        family: action.value
      });
      return Object.assign({}, state, { familyMember });
    }

    case "CLEAR_FAMILY_MEMBER": {
      const familyMember = {
        name: "",
        email: "",
        family: []
      };
      return Object.assign({}, state, { familyMember });
    }

    default: {
      return state;
    }
  }
}

module.exports = familyReducer;
