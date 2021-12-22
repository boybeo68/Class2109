import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeAlert, setAlert } from '../../features/alert/alertSlice';
import { nanoid } from '@reduxjs/toolkit';

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
                        <Link to="/register" className="btn btn-primary">Sign Up</Link>
                        <Link to="/login" className="btn btn-light">Login</Link>
                        <button onClick={() => {
                            dispatch(setAlert({ msg: 'Test alert', id: nanoid(), alertType: 'danger' }))
                        }}>test alert</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
