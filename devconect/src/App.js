import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { store } from './app/store'
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./features/auth/Login";
import Alert from "./components/layout/Alert";
import Register from "./features/auth/Register";
import DashBoard from "./features/dashboard/DashBoard";
// - Dựng base project
// - Kiên thức mới. ( Authenication - JWT)
// - Ôn tập kiến thức cơ bản (State, props, lifecycle, call api, Redux )
// - Sử dung postman và linh động mock api
// - Router
// - Deploy

const App = () => {
  return (
    <Router>
      <Navbar />
      <Alert />
      <Routes>
        <Route path='/' element={< Landing />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<DashBoard />}></Route>
      </Routes>
    </Router>
  )
};

export default App;
