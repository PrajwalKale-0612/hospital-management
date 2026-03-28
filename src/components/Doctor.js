




import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Doctor() {
    return (
        <div className="card-body">
            <ul className="list-group list-group-flush">

                <li className="list-group-item bg-warning-subtle">
                    <p><strong>Name:</strong><i className="fas fa-user-md text-primary"></i> Dr. Priya Desai</p>
                    <p><strong>Age:</strong> 38</p>
                    <p><strong>Gender:</strong> Female</p>
                    <p><strong>Specialist:</strong> Pediatrician</p>
                    <p><strong>Today's Appointments:</strong> 24</p>
                </li>

                <br /><br />
                <li className="list-group-item bg-warning-subtle">
                    <p><strong>Name:</strong><i className="fas fa-user-md text-primary"></i> Dr. A. Kumar</p>
                    <p><strong>Age:</strong> 3</p>
                    <p><strong>Gender:</strong> Male</p>
                    <p><strong>Specialist:</strong> Cardiologist</p>
                    <p><strong>Today's Appointments:</strong> 08</p>
                </li>
                <br /><br />

                <li className="list-group-item bg-warning-subtle">
                    <p><strong>Name:</strong><i className="fas fa-user-md text-primary"></i> Dr. R. Nair</p>
                    <p><strong>Age:</strong> 48</p>
                    <p><strong>Gender:</strong> Male</p>
                    <p><strong>Specialist:</strong> Neurologist</p>
                    <p><strong>Today's Appointments:</strong> 14</p>
                </li>
                <br /><br />

                <li className="list-group-item bg-warning-subtle">
                    <p><strong>Name:</strong><i className="fas fa-user-md text-primary"></i> Dr. S. Verma</p>
                    <p><strong>Age:</strong> 29</p>
                    <p><strong>Gender:</strong> Female</p>
                    <p><strong>Specialist:</strong> Dermatologist</p>
                    <p><strong>Today's Appointments:</strong> 07</p>
                </li>
            </ul>
        </div>


    )
};
