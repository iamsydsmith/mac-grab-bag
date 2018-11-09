import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <h2 style={{ marginBottom: "40px" }}>Registration</h2>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              name="firstName"
              onChange={this.props.handleFirstNameChange}
              value={this.props.user.firstName}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              name="lastName"
              onChange={this.props.handleLastNameChange}
              value={this.props.user.lastName}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              name="email"
              onChange={this.props.handleEmailChange}
              value={this.props.user.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              onChange={this.props.handlePasswordChange}
              value={this.props.user.password}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
              name="password_confirm"
              onChange={this.props.handlePasswordConfirmChange}
              value={this.props.user.password_confirm}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Street Address"
              className="form-control"
              name="streetAddress"
              onChange={this.props.handleStreetAddressChange}
              value={this.props.user.streetAddress}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="City"
              className="form-control"
              name="city"
              onChange={this.props.handleCityChange}
              value={this.props.user.city}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="State"
              className="form-control"
              name="state"
              onChange={this.props.handleStateChange}
              value={this.props.user.state}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Zip Code"
              className="form-control"
              name="zipCode"
              onChange={this.props.handleZipCodeChange}
              value={this.props.user.zip}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
