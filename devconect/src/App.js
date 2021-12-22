import React from "react";
import "./App.css";
// - Dựng base project
// - Kiên thức mới. ( Authenication - JWT)
// - Ôn tập kiến thức cơ bản (State, props, lifecycle, call api, Redux )
// - Sử dung postman và linh động mock api
// - Router
// - Deploy
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./features/auth/Register";
import Login from "./features/auth/Login";
import Landing from "./components/Landing";
import Alert from "./features/alert/Alert";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Alert />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
