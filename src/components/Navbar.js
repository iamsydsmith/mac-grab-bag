import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <a href="/login" className="nav-link" onClick={props.logoutUser}>
        <img
          src={props.user.avatar}
          alt={props.user.firstName}
          title={props.user.firstName}
          className="rounded-circle"
          style={{ width: "25px", marginRight: "5px" }}
        />
        Logout
      </a>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Sign In
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        McIntosh Family Christmas Grab Bag
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {props.isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
};
export default Navbar;
