import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HospitalDashboard.css";

export default function HospitalDashboard() {

    const [todayCount, setTodayCount] = useState(0);
    const [totalPatients, setTotalPatients] = useState(0);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("appointments")) || [];
        const today = new Date().toISOString().split("T")[0];
        const todaysAppointments = data.filter(a => a.date === today);
        setTodayCount(todaysAppointments.length);
    }, []);

    useEffect(() => {
        const patients = JSON.parse(localStorage.getItem("patients")) || [];
        setTotalPatients(patients.length);
    }, []);

    return (
        <div className="container mt-4">

            <h2>Dashboard</h2>

            <p>Total Patients: {totalPatients}</p>
            <p>Today's Appointments: {todayCount}</p>

            <Link to="/appointmentform">
                <button className="btn btn-primary m-2">Book Appointment</button>
            </Link>

            <Link to="/patient">
                <button className="btn btn-success m-2">View Patients</button>
            </Link>

        </div>
    );
}
