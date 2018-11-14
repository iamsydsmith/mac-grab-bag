import React from "react";
import classnames from "classnames";

const _ = require("lodash");

const Login = props => {
  const enabled = props.user.email && props.user.password;
  return (
    <div className="container" style={{ marginTop: "50px", width: "700px" }}>
      <h2 style={{ marginBottom: "40px" }}>Login</h2>
      <form onSubmit={props.handleSubmit}>
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
          <button disabled={!enabled} type="submit" className="btn btn-primary">
            Login User
          </button>
          {props.errors.backend && (
            <div className="invalid-feedback">{props.errors.backend}</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
