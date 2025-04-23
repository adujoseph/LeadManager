import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";

const [leads, setLeads] = useState([]);
    
const fetchLeads = async () => {
  try {
    const res = await axios.get("http://localhost:5050/api/leads");
    setLeads(res.data);
  } catch (err) {
    console.error(err);
    alert("Failed to fetch leads");
  }
};

useEffect(() => {
  fetchLeads();
}, []);

export default function Home() {
  return (
        <main>
          <h1>Lead Manager</h1>
          <LeadForm onLeadCreated={fetchLeads} />
          <LeadList leads={leads} />
        </main>
      );
}
