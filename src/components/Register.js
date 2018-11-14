import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Register = props => {
  const enabled =
    props.user.firstName &&
    props.user.lastName &&
    props.user.email &&
    props.user.password &&
    props.user.password_confirm &&
    props.user.streetAddress &&
    props.user.city &&
    props.user.state &&
    props.user.zip;

  return (
    <div className="container" style={{ marginTop: "50px", width: "700px" }}>
      <h2 style={{ marginBottom: "40px" }}>Registration</h2>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            className={classnames("form-control form-control-lg", {
              "is-invalid": props.errors.firstName
            })}
            name="firstName"
            onChange={props.handleFirstNameChange}
            value={props.user.firstName}
          />
          {props.errors.firstName && (
            <div className="invalid-feedback">{props.errors.firstName}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            className={classnames("form-control form-control-lg", {
              "is-invalid": props.errors.lastName
            })}
            name="lastName"
            onChange={props.handleLastNameChange}
            value={props.user.lastName}
          />
          {props.errors.lastName && (
            <div className="invalid-feedback">{props.errors.lastName}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className={classnames("form-control form-control-lg", {
              "is-invalid": props.errors.email
            })}
            name="email"
            onChange={props.handleEmailChange}
            value={props.user.email}
          />
          {props.errors.email && (
            <div className="invalid-feedback">{props.errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className={classnames("form-control form-control-lg", {
              "is-invalid": props.errors.password
            })}
            name="password"
            onChange={props.handlePasswordChange}
            value={props.user.password}
          />
          {props.errors.password && (
            <div className="invalid-feedback">{props.errors.password}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            className={classnames("form-control form-control-lg", {
              "is-invalid": props.errors.password_confirm
            })}
            name="password_confirm"
            onChange={props.handlePasswordConfirmChange}
            value={props.user.password_confirm}
          />
          {props.errors.password_confirm && (
            <div className="invalid-feedback">
              {props.errors.password_confirm}
            </div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Street Address"
            className={classnames("form-control form-control-lg", {
              "is-invalid": props.errors.streetAddress
            })}
            name="streetAddress"
            onChange={props.handleStreetAddressChange}
            value={props.user.streetAddress}
          />
          {props.errors.streetAddress && (
            <div className="invalid-feedback">{props.errors.streetAddress}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="City"
            className={classnames("form-control form-control-lg", {
              "is-invalid": props.errors.city
            })}
            name="city"
            onChange={props.handleCityChange}
            value={props.user.city}
          />
          {props.errors.city && (
            <div className="invalid-feedback">{props.errors.city}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="State"
            className={classnames("form-control form-control-lg", {
              "is-invalid": props.errors.state
            })}
            name="state"
            onChange={props.handleStateChange}
            value={props.user.state}
          />
          {props.errors.state && (
            <div className="invalid-feedback">{props.errors.state}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Zip Code"
            className={classnames("form-control form-control-lg", {
              "is-invalid": props.errors.zip
            })}
            name="zipCode"
            onChange={props.handleZipCodeChange}
            value={props.user.zip}
          />
          {props.errors.zip && (
            <div className="invalid-feedback">{props.errors.zip}</div>
          )}
        </div>
        <div className="form-group">
          <button disabled={!enabled} type="submit" className="btn btn-primary">
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
