import React from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../features/alert/alertSlice";

export default function Landing() {
  const dispatch = useDispatch();
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">
              Sign Up
            </a>
            <a href="login.html" className="btn btn-light">
              Login
            </a>
            <button
              onClick={() => {
                dispatch(setAlert({ msg: "test alert", alertType: "danger" }));
              }}
            >
              test alert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
