import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Map from "./components/Map";
import DonationForm from "./components/DonationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/map" element={<Map />} />
        <Route path="/donate" element={<DonationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
