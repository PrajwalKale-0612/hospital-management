import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <h4 className="fw-bold m-0 text-light">
                Hospital Management Dashboard
                <p className='admin text-light'>
                    Welcome, Admin <i className="fas fa-user-tie text-warning"></i>
                </p>
            </h4>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto">

                        <li><Link to="/dashboard" className="nav-link">Home</Link></li>
                        <li><Link to="/patient" className="nav-link">Patient</Link></li>
                        <li><Link to="/doctor" className="nav-link">Doctor</Link></li>
                        <li><Link to="/appointmentform" className="nav-link">Appointments</Link></li>

                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
