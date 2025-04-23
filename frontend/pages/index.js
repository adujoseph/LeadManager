import { useEffect, useState } from "react";
import axios from "axios";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";

export default function Home() {
  const [leads, setLeads] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:5050/api/leads");
      setLeads(res.data.leads);
      setTotalPages(res.data.totalPages);
      setPage(res.data.page);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch leads");
    }
  };
  
  useEffect(() => {
    fetchLeads();
  }, []);

 

  return (
        <main>
          <h1 className="text-3xl font-bold text-center mb-2 pt-1.5">Lead Manager</h1>
          <LeadForm onLeadCreated={fetchLeads} />
          <LeadList  
          leads={leads}
          page={page}
          totalPages={totalPages}
          onPageChange={(newPage) => fetchLeads(newPage)} 
          />
        </main>
      );
}
