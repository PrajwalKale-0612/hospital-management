
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import HospitalDashboard from './components/HospitalDashboard';

import Patient from './components/Patient';
import Doctor from './components/Doctor';
// import PatientList from "./components/PatientList";
import PatientDetails from "./components/PatientDetails";
import AppointmentForm from './components/AppointmentForm';

import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";


function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/"; // login page ला navbar नको

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<HospitalDashboard />} />

        <Route path="/dashboard//patient" element={<Patient />} />
        {/* <Route index element={<PatientList patients={patients} />} />
          <Route path="/dashboard/patient/:patientName" element={<PatientDetail patients={patients} />} /> */}

        <Route path="/" element={<Patient />} />
        {/* <Route path="/patient/:name" element={<PatientDetails />} /> */}
        {/* <Route path="/dashboard//patient/:name" element={<Patient />} /> */}

        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/dashboard//appointmentform" element={<AppointmentForm />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
      </Routes>
    </>
  );
}



function App() {
  return (
    <>

      <BrowserRouter>
        <Layout />
      </BrowserRouter>

      {/* <Router>
      <Routes>
        <Route path="/" element={<Patient1 />} />
        <Route path="/patient1/:name" element={<PatientDetail />} />
      </Routes>
    </Router> */}

    </>
  )
};

export default App;