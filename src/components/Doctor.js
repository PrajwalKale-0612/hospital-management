import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Doctor() {
    return (
        <div className="container mt-4">
            <h3>Doctor List</h3>

            <ul className="list-group">
                <li className="list-group-item">
                    <b>Dr. Priya Desai</b> - Pediatrician
                </li>
                <li className="list-group-item">
                    <b>Dr. A. Kumar</b> - Cardiologist
                </li>
                <li className="list-group-item">
                    <b>Dr. R. Nair</b> - Neurologist
                </li>
                <li className="list-group-item">
                    <b>Dr. S. Verma</b> - Dermatologist
                </li>
            </ul>
        </div>
    );
}
