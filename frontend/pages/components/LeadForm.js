import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const LeadForm = ({ onLeadCreated }) => {
  const [form, setForm] = useState({ name: "", email: "", status: "New" });
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log('i dey')
    setLoading(true);
    try {
      await axios.post("http://localhost:5050/api/leads", form);
      toast.success("🎉 Lead added successfully!");
      onLeadCreated();
      setForm({ name: "", email: "", status: "New" });
    } catch (err) {
      console.error(err?.response?.data?.message);
      toast.error(err?.response?.data?.message || "Error creating lead");
    } finally{
        setLoading(false)
    }
  };

  return (
    <form  className="space-y-4 bg-white p-6 shadow rounded max-w-md mx-auto mt-8" onSubmit={submitForm}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <select name="status" value={form.status} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>New</option>
        <option>Engaged</option>
        <option>Proposal Sent</option>
        <option>Closed-Won</option>
        <option>Closed-Lost</option>
      </select>
      <button type="submit" 
       disabled={loading}
       className={`w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-2 rounded transition ${
         loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"
       }`}
       >
      {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
            ></path>
          </svg>
        ) : (
          "Add Lead"
        )}
      </button>
    </form>
  );
};

export default LeadForm;
