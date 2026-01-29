const companies = [
  { id: 1, name: "Google", location: "Bangalore" },
  { id: 2, name: "Amazon", location: "Hyderabad" },
  { id: 3, name: "Microsoft", location: "Chennai" },
  { id: 4, name: "Zoho", location: "Coimbatore" },
  {id:  5, name: "Infosys", location:"Hyderabad"},
  {id: 6, name:"Deloitte", location:"Bangalore"},
];

const Companies = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Companies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="border rounded-lg p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{company.name}</h2>
            <p className="text-gray-500">{company.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;