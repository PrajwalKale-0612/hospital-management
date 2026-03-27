import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    patientId: "",
    patientName: "",
    doctor: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      id: Date.now(),
      ...form
    };

    const old = JSON.parse(localStorage.getItem("appointments")) || [];
    localStorage.setItem("appointments", JSON.stringify([...old, newAppointment]));

    alert("Appointment Booked Successfully");
    navigate("/patient"); // patient page ला जा
  };

  return (
    <div className="container mt-4">
      <h3>Book Appointment</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="patientId"
          placeholder="Patient ID"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />

        <input
          name="patientName"
          placeholder="Patient Name"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />

        <input
          name="doctor"
          placeholder="Doctor Name"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />

        <textarea
          name="reason"
          placeholder="Reason"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary">Book Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentForm;