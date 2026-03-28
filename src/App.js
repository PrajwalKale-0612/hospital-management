import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import HospitalDashboard from './components/HospitalDashboard';
import Patient from './components/Patient';
import Doctor from './components/Doctor';
import PatientDetails from "./components/PatientDetails";
import AppointmentForm from './components/AppointmentForm';

import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<HospitalDashboard />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/dashboard//patient" element={<Patient />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/appointmentform" element={<AppointmentForm />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
