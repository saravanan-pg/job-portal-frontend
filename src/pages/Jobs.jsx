import { useState } from "react";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/Jobcard";


const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      type: "Full-time",
    },
    {
      id: 2,
      title: "React Developer",
      company: "Amazon",
      location: "Hyderabad",
      type: "Remote",
    },
    {
      id: 3,
      title: "UI Engineer",
      company: "Microsoft",
      location: "Chennai",
      type: "Internship",
    },
    {
        id:4,
        title:"Backend Developer",
        company:"Zoho",
        location:"coimbatore",
        type:"Full-time",
    },
    {
        id:5,
        title:"Full Stack Developer",
        company:"Infosys",
        location:"Hyderabad",
        type:"Remote"
    },
    {
        id:6,
        title:"Data Analyst",
        company:"Deloitte",
        location:"Bangalore",
        type:"Internship"
    },
  ];

   
  const[searchTerm,setSearchTerm]=useState("");
  const[filter, setFilter]=useState("All");
  const[search,setSearch]=useState("");
  const filteredJobs = jobs.filter((job) => {
  const search = searchTerm.toLowerCase();

  const matchesSearch =
    job.title.toLowerCase().includes(search) ||
    job.company.toLowerCase().includes(search) ||
    job.location.toLowerCase().includes(search);

  const matchesFilter =
    filter === "All" ? true : job.type === filter;

  return matchesSearch && matchesFilter;
});

 return (
  <div className="min-h-screen bg-gray-100 py-10 px-6">
    <h1 className="text-2xl font-bold mb-6 text-center">
      Available Jobs
    </h1>
    
    <div className="max-w-xl mx-auto mb-6">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>

    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {["All", "Full-time", "Remote", "Internship"].map((item) => (
        <button
          key={item}
          onClick={() => setFilter(item)}
          className={`px-4 py-2 rounded border ${
            filter === item
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          {item}
        </button>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">
          No jobs found
        </p>
      )}
    </div>
  </div>
);
};

export default Jobs;