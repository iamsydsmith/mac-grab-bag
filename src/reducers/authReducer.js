import isEmpty from "../helpers/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INITIAL_STATE": {
      return state;
    }

    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    case "GET_ERRORS":
      return action.payload;

    case "ADD_FIRST_NAME": {
      const user = Object.assign({}, state.user, {
        firstName: action.value
      });
      return Object.assign({}, state, { user });
    }

    case "ADD_LAST_NAME": {
      const user = Object.assign({}, state.user, {
        lastName: action.value
      });
      return Object.assign({}, state, { user });
    }

    case "ADD_EMAIL": {
      const user = Object.assign({}, state.user, {
        email: action.value
      });
      return Object.assign({}, state, { user });
    }

    case "ADD_PASSWORD": {
      const user = Object.assign({}, state.user, {
        password: action.value
      });
      return Object.assign({}, state, { user });
    }

    case "ADD_PASSWORD_CONFIRM": {
      const user = Object.assign({}, state.user, {
        password_confirm: action.value
      });
      return Object.assign({}, state, { user });
    }

    case "ADD_STREET_ADDRESS": {
      const user = Object.assign({}, state.user, {
        streetAddress: action.value
      });
      return Object.assign({}, state, { user });
    }

    case "ADD_CITY": {
      const user = Object.assign({}, state.user, {
        city: action.value
      });
      return Object.assign({}, state, { user });
    }

    case "ADD_STATE": {
      const user = Object.assign({}, state.user, {
        state: action.value
      });
      return Object.assign({}, state, { user });
    }

    case "ADD_ZIP_CODE": {
      const user = Object.assign({}, state.user, {
        zip: action.value
      });
      return Object.assign({}, state, { user });
    }

    default:
      return state;
  }
};

export default authReducer;
