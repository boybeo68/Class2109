import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const authLink = (
    <ul>
      <li>
        <a href="profiles.html">Developers</a>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
      <li>
        <a
          onClick={() => {
            dispatch(logout());
          }}
          href="#"
        >
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
  const guesLink = (
    <ul>
      <li>
        <a href="profiles.html">Developers</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <Fragment>{auth.token ? authLink : guesLink}</Fragment>
    </nav>
  );
}
