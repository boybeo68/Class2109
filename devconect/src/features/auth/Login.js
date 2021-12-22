import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../alert/alertSlice";
import { loginUser } from "./authSlice";

export default function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { email, password } = formData;
  const onChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  if (auth.token) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            onChange={onChange}
            value={email}
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            onChange={onChange}
            value={password}
            placeholder="Password"
            name="password"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
}
