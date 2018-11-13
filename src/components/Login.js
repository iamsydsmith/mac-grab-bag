import React from "react";

const Login = props => {
  return (
    <div className="container" style={{ marginTop: "50px", width: "700px" }}>
      <h2 style={{ marginBottom: "40px" }}>Login</h2>
      <form onSubmit={props.handleSubmit}>
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
          <button type="submit" className="btn btn-primary">
            Login User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
