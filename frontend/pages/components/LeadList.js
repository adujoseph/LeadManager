const LeadList = ({ leads }) => {
    return (
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Status</th><th>Created At</th></tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
              <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };