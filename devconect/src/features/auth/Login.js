import React, { useState, useEffect } from 'react'
import { setAlert } from '../../features/alert/alertSlice';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from './authSlice';
import { Navigate } from 'react-router-dom';
export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password, } = formData;
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }))
    };
    if (auth.token) {
        return (<Navigate to='/dashboard' />)

    }

    return (
        <section className="container">
            <div className="alert alert-danger">
                Invalid credentials
            </div>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <a href="register.html">Sign Up</a>
            </p>
        </section>
    )
}
