import React, { useState, useEffect } from 'react'
import { setAlert } from '../../features/alert/alertSlice';
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from './authSlice';
import { Navigate } from 'react-router-dom';
export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = formData;
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(password, password2);
        if (password !== password2) {
            dispatch(setAlert({ msg: 'Passwords do not match', alertType: 'danger' }))
        } else {
            dispatch(registerUser({ name, email, password }))
            // register({ name, email, password });
        }
    };
    if (auth.token) {
        return (<Navigate to='/dashboard' />)

    }


    return (
        <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={onSubmit} >
                <div className="form-group">
                    <input type="text" placeholder="Name" name="name" value={name}
                        onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image, use a
                        Gravatar email
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        // minLength="6"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        // minLength="6"
                        value={password2}
                        onChange={onChange}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <a href="login.html">Sign In</a>
            </p>
        </section>
    )
}
