// App.js

import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

import history from "./../history";
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";

class App extends Component {
  componentDidMount() {
    this.context.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  handleFirstNameChange(event) {
    this.context.store.dispatch({
      type: "ADD_FIRST_NAME",
      value: event.target.value
    });
  }

  handleLastNameChange(event) {
    this.context.store.dispatch({
      type: "ADD_LAST_NAME",
      value: event.target.value
    });
  }

  handleEmailChange(event) {
    this.context.store.dispatch({
      type: "ADD_EMAIL",
      value: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.context.store.dispatch({
      type: "ADD_PASSWORD",
      value: event.target.value
    });
  }

  handlePasswordConfirmChange(event) {
    this.context.store.dispatch({
      type: "ADD_PASSWORD_CONFIRM",
      value: event.target.value
    });
  }

  handleStreetAddressChange(event) {
    this.context.store.dispatch({
      type: "ADD_STREET_ADDRESS",
      value: event.target.value
    });
  }

  handleCityChange(event) {
    this.context.store.dispatch({
      type: "ADD_CITY",
      value: event.target.value
    });
  }

  handleStateChange(event) {
    this.context.store.dispatch({
      type: "ADD_STATE",
      value: event.target.value
    });
  }

  handleZipCodeChange(event) {
    this.context.store.dispatch({
      type: "ADD_ZIP_CODE",
      value: event.target.value
    });
  }

  handleRegisterSubmit(event) {
    event.preventDefault();
    this.context.store.dispatch({ type: "ADD_USER" });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.context.store.dispatch({ type: "LOGIN_USER" });
  }

  render() {
    const appState = this.context.store.getState();

    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Route
            exact
            path="/"
            render={props => <Home user={appState.user} {...props} />}
          />
          <div className="container">
            <Route
              exact
              path="/register"
              render={props => (
                <Register
                  user={appState.user}
                  errors={appState.errors}
                  handleFirstNameChange={this.handleFirstNameChange.bind(this)}
                  handleLastNameChange={this.handleLastNameChange.bind(this)}
                  handleEmailChange={this.handleEmailChange.bind(this)}
                  handlePasswordChange={this.handlePasswordChange.bind(this)}
                  handlePasswordConfirmChange={this.handlePasswordConfirmChange.bind(
                    this
                  )}
                  handleStreetAddressChange={this.handleStreetAddressChange.bind(
                    this
                  )}
                  handleCityChange={this.handleCityChange.bind(this)}
                  handleStateChange={this.handleStateChange.bind(this)}
                  handleZipCodeChange={this.handleZipCodeChange.bind(this)}
                  handleSubmit={this.handleRegisterSubmit.bind(this)}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  user={appState.user}
                  errors={appState.errors}
                  handleEmailChange={this.handleEmailChange.bind(this)}
                  handlePasswordChange={this.handlePasswordChange.bind(this)}
                  handleSubmit={this.handleLoginSubmit.bind(this)}
                  {...props}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object
};

export default App;
