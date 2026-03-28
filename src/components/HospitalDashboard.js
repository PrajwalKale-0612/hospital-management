import React from "react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HospitalDashboard.css";
import {
    FaUserInjured,
    FaUserMd,
    FaCalendarCheck,
    FaBed,
    FaRupeeSign,
} from "react-icons/fa";

export default function HospitalDashboard() {
    const [todayCount, setTodayCount] = useState(0);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("appointments")) || [];

        const today = new Date().toISOString().split("T")[0];
        // format: YYYY-MM-DD

        const todaysAppointments = data.filter(a => a.date === today);

        setTodayCount(todaysAppointments.length);
    }, []);


    const [totalPatients, setTotalPatients] = useState(0);

  useEffect(() => {
    const updatePatientCount = () => {
      const patients = JSON.parse(localStorage.getItem("patients")) || [];
      setTotalPatients(patients.length);
    };

    updatePatientCount(); // first load

    // 🔥 auto update without refresh
    window.addEventListener("storage", updatePatientCount);
    window.addEventListener("focus", updatePatientCount);

    return () => {
      window.removeEventListener("storage", updatePatientCount);
      window.removeEventListener("focus", updatePatientCount);
    };
  }, []);

    return (
        <div className="dashboard container-fluid py-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                {/* <h2 className="fw-bold m-0">Hospital Management Dashboard</h2> */}
                <div>
                    <button className="btn btn-success me-2">Add Patient</button>
                    <Link to="\AppointmentForm">
                    <button className="btn btn-secondary">Book Appointment</button>
                    </Link>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="row g-4 mb-4">
                <div className="col-md-6 col-lg-3">
                    <div className="card stat-card patients h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Total Patients</h6>
                                <h3>{totalPatients}</h3>
                            </div>
                            <FaUserInjured size={36} />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="card stat-card doctors h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Total Doctors</h6>
                                <h3>45</h3>
                            </div>
                            <FaUserMd size={36} />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="card stat-card appointments h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Today's Appointments</h6>
                                <h3>{todayCount}</h3>
                            </div>
                            <FaCalendarCheck size={36} />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="card stat-card beds h-100">
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                                <h6>Available Beds</h6>
                                <h3>12 / 50</h3>
                            </div>
                            <FaBed size={36} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div className="row g-4 mb-4">
                {/* Recent Patients */}
                <div className="col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Recent Patients</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><i className="fa-solid fa-user text-primary"></i> Rajesh Sharma</li>
                                <li className="list-group-item"><i className="fa-solid fa-user text-primary"></i> Rajesh Sharma</li>
                                <li className="list-group-item"><i className="fa-solid fa-user text-primary"></i> Sunita Patil</li>
                                <li className="list-group-item"><i className="fa-solid fa-user text-primary"></i> Vikas Desai</li>
                                <li className="list-group-item"><i className="fa-solid fa-user text-primary"></i> Asha Mehta</li>
                                <li className="list-group-item"><i className="fa-solid fa-user text-primary"></i> Sanjay Kulkarni</li>
                            </ul>

                        <Link to="\patient">
                            <button className="btn btn-sm btn-outline-primary mt-3">
                                View All
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>

                {/* Appointments */}
                <div className="col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Upcoming Appointments</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><i className="fas fa-user-md text-primary"></i> Dr. A. Kumar — 10:00 AM</li>
                                <li className="list-group-item"><i className="fas fa-user-md text-primary"></i> Dr. S. Verma — 11:30 AM</li>
                                <li className="list-group-item"><i className="fas fa-user-md text-primary"></i> Dr. Priya Desai — 1:00 PM</li>
                                <li className="list-group-item"><i className="fas fa-user-md text-primary"></i> Dr. R. Nair — 3:00 PM</li>
                            </ul>
                            <button className="btn btn-sm btn-outline-primary mt-3">
                                View All
                            </button>
                        </div>
                    </div>
                </div>

                {/* Billing */}
                <div className="col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                <FaRupeeSign className="me-2" />
                                Billing Summary
                            </h5>
                            <div className="info-row">
                                <span>Today's Revenue</span>
                                <strong>₹ 28,500</strong>
                            </div>
                            <div className="info-row">
                                <span>Pending Bills</span>
                                <strong>₹ 12,300</strong>
                            </div>
                            <div className="info-row">
                                <span>Monthly Earnings</span>
                                <strong>₹ 3,20,000</strong>
                            </div>
                            <div className="info-row">
                                <span>Unpaid Invoices</span>
                                <strong>8</strong>
                            </div>
                            <button className="btn btn-sm btn-outline-primary mt-3">
                                View Reports
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="row g-4">
                <div className="col-lg-6">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Bed Status</h5>
                            <ul>
                                <li>Occupied Beds: 38</li>
                                <li>Available Beds: 12</li>
                                <li>ICU Beds: 8</li>
                                <li>General Ward Beds: 30</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Doctor Schedule</h5>
                            <ul>
                                <li ><i className="fas fa-user-md text-primary"></i> Dr. A. Kumar — 9AM–2PM — Cardiology</li>
                                <li><i className="fas fa-user-md text-primary"></i> Dr. Priya Desai — 10AM–4PM — Pediatrics</li>
                                <li><i className="fas fa-user-md text-primary"></i> Dr. R. Nair — 12PM–6PM — Orthopedics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}





