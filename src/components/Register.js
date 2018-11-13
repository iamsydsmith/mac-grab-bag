import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Register = props => {
  return (
    <div className="container" style={{ marginTop: "50px", width: "700px" }}>
      <h2 style={{ marginBottom: "40px" }}>Registration</h2>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
            name="firstName"
            onChange={props.handleFirstNameChange}
            value={props.user.firstName}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            className="form-control"
            name="lastName"
            onChange={props.handleLastNameChange}
            value={props.user.lastName}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="email"
            onChange={props.handleEmailChange}
            value={props.user.email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            name="password"
            onChange={props.handlePasswordChange}
            value={props.user.password}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control"
            name="password_confirm"
            onChange={props.handlePasswordConfirmChange}
            value={props.user.password_confirm}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Street Address"
            className="form-control"
            name="streetAddress"
            onChange={props.handleStreetAddressChange}
            value={props.user.streetAddress}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="City"
            className="form-control"
            name="city"
            onChange={props.handleCityChange}
            value={props.user.city}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="State"
            className="form-control"
            name="state"
            onChange={props.handleStateChange}
            value={props.user.state}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Zip Code"
            className="form-control"
            name="zipCode"
            onChange={props.handleZipCodeChange}
            value={props.user.zip}
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
};

Register.propTypes = {
  user: PropTypes.object,
  error: PropTypes.object,
  handleFirstNameChange: PropTypes.func,
  handleLastNameChange: PropTypes.func,
  handleEmailChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  handlePasswordConfirmChange: PropTypes.func,
  handleStreetAddressChange: PropTypes.func,
  handleCityChange: PropTypes.func,
  handleStateChange: PropTypes.func,
  handleZipCodeChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default Register;
