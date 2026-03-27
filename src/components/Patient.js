
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Patient() {
  const [patients, setPatients] = useState([]);

  // 🔹 appointments मधून patient names काढणे
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || [];

    const uniquePatients = [...new Set(data.map(a => a.patientName))];

    setPatients(uniquePatients);
  }, []);

  // 🔹 patients localStorage मध्ये save करणे (Dashboard साठी)
  useEffect(() => {
    const formatted = patients.map((name, index) => ({
      id: index + 1,
      name: name
    }));

    localStorage.setItem("patients", JSON.stringify(formatted));
  }, [patients]);   // ⚠️ important dependency

  const makeId = (name) => name.replace(/\s+/g, "").toLowerCase();

  return (
    <div className="container mt-4">
      <h2>Patient List</h2>

      {patients.length === 0 ? (
        <p>No Patients Found</p>
      ) : (
        <ul className="list-group list-group-flush">
          {patients.map((patient, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {patient}

              <Link to={`/patient/${makeId(patient)}`}>
                <button className="btn btn-outline-success btn-sm">
                  Details
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}