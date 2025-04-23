import { useState } from "react";
import axios from "axios";

const LeadForm = ({ onLeadCreated }) => {
  const [form, setForm] = useState({ name: "", email: "", status: "New" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5050/api/leads", form);
      onLeadCreated();
      setForm({ name: "", email: "", status: "New" });
    } catch (err) {
      console.error(err);
      alert("Error creating lead");
    }
  };

  return (
    <form onSubmit={submitForm}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>New</option>
        <option>Engaged</option>
        <option>Proposal Sent</option>
        <option>Closed-Won</option>
        <option>Closed-Lost</option>
      </select>
      <button type="submit">Add Lead</button>
    </form>
  );
};

export default LeadForm;
