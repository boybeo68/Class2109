import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
// import Spinner from '../layout/Spinner';

const PrivateRoute = ({ component: Component, auth: { token, loading } }) => {
  if (loading) return null;
  if (token) return <Component />;

  return <Navigate to="/login" />;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
