import React, { useState } from "react";
import axios from "axios";

const DonationForm = () => {
  const [form, setForm] = useState({ name: "", food: "", location: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/donations", form);
      alert("Donation submitted successfully!");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Donor Name" onChange={handleChange} />
      <input name="food" placeholder="Food Type" onChange={handleChange} />
      <input name="location" placeholder="Pickup Location" onChange={handleChange} />
      <button type="submit">Submit Donation</button>
    </form>
  );
};

export default DonationForm;


router.post("/donations", async (req, res) => {
  try {
    const newDonation = new Donation(req.body);
    await newDonation.save();
    res.status(201).json({ message: "Donation submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting donation.", error });
  }
});
