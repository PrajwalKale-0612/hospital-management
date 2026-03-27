import React from 'react';
import { Link } from "react-router-dom"
import "./Navbar.css";
class Navbar extends React.Component {
    state = {}
    render() {
        return (
            <>
            
            <h4 className="fw-bold m-0 text-light" >Hospital Management Dashboard    <p className='admin text-light'>Welcome, Admin<i className="fas fa-user-tie text-warning"></i></p></h4>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/patient" className="nav-link">Patient</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/doctor" className="nav-link">Doctor</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Appointments
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Billing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Reports
                                </a>
                            </li>   
                        </ul> 
                    </div>
                </div>
            </nav>
            </>
        );
    }
}

export default Navbar;