
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PatientDetails() {
  const { id } = useParams();
  const [appointments, setAppointments] = useState([]);

  const makeId = (name) => name.replace(/\s+/g, "").toLowerCase();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || [];

    const filtered = data.filter(a => makeId(a.patientName) === id);

    setAppointments(filtered);
  }, [id]);

  return (
    <div className="container mt-4">
      <h3>Patient Details</h3>

      {appointments.length === 0 ? (
        <p>No Appointments</p>
      ) : (
        <>
          <h5>Name: {appointments[0].patientName}</h5>

          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(a => (
                <tr key={a.id}>
                  <td>{a.doctor}</td>
                  <td>{a.date}</td>
                  <td>{a.time}</td>
                  <td>{a.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}