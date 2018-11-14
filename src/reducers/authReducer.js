import isEmpty from "../helpers/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INITIAL_STATE": {
      return initialState;
    }

    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    case "SET_ERRORS": {
      return Object.assign({}, state, { errors: action.payload });
    }

    case "ADD_FIRST_NAME": {
      const user = Object.assign({}, state.user, {
        firstName: action.value
      });

      const errors = Object.assign({}, state.errors, {
        firstName: action.value.length < 1 ? "Please enter your first name" : ""
      });

      return Object.assign({}, state, { user, errors });
    }

    case "ADD_LAST_NAME": {
      const user = Object.assign({}, state.user, {
        lastName: action.value
      });

      const errors = Object.assign({}, state.errors, {
        lastName: action.value.length < 1 ? "Please enter your last name" : ""
      });

      return Object.assign({}, state, { user, errors });
    }

    case "ADD_EMAIL": {
      const user = Object.assign({}, state.user, {
        email: action.value
      });

      const errors = Object.assign({}, state.errors, {
        email: action.value.length < 1 ? "Please enter your email" : ""
      });

      return Object.assign({}, state, { user, errors });
    }

    case "ADD_PASSWORD": {
      const user = Object.assign({}, state.user, {
        password: action.value
      });

      const errors = Object.assign({}, state.errors, {
        password: action.value.length < 1 ? "Please enter your password" : ""
      });

      return Object.assign({}, state, { user, errors });
    }

    case "ADD_PASSWORD_CONFIRM": {
      const user = Object.assign({}, state.user, {
        password_confirm: action.value
      });

      const errors = Object.assign({}, state.errors, {
        password_confirm:
          action.value.length < 1 ? "Please enter your password" : ""
      });

      return Object.assign({}, state, { user, errors });
    }

    case "ADD_STREET_ADDRESS": {
      const user = Object.assign({}, state.user, {
        streetAddress: action.value
      });

      const errors = Object.assign({}, state.errors, {
        streetAddress:
          action.value.length < 1 ? "Please enter your address" : ""
      });

      return Object.assign({}, state, { user, errors });
    }

    case "ADD_CITY": {
      const user = Object.assign({}, state.user, {
        city: action.value
      });

      const errors = Object.assign({}, state.errors, {
        city: action.value.length < 1 ? "Please enter your city" : ""
      });

      return Object.assign({}, state, { user, errors });
    }

    case "ADD_STATE": {
      const user = Object.assign({}, state.user, {
        state: action.value
      });

      const errors = Object.assign({}, state.errors, {
        state: action.value.length < 1 ? "Please enter your state" : ""
      });

      return Object.assign({}, state, { user, errors });
    }

    case "ADD_ZIP_CODE": {
      const user = Object.assign({}, state.user, {
        zip: action.value
      });

      const errors = Object.assign({}, state.errors, {
        zip: action.value.length < 1 ? "Please enter your zip code" : ""
      });

      return Object.assign({}, state, { user, errors });
    }

    default:
      return state;
  }
};

export default authReducer;
