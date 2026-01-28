import { useState } from "react";
import JobCard from "../components/Jobcard";
import SearchBar from "../components/SearchBar";

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

  const[filter, setFilter]=useState("All");
  const[search,setSearch]=useState("");
  const filteredJobs = jobs.filter((job) => {
  const matchesType =
    filter === "All" || job.type === filter;

  const matchesSearch =
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase());

  return matchesType && matchesSearch;
});

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
  <h1 className="text-2xl font-bold mb-6 text-center">
    Available Jobs
  </h1>

  <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-8">
    <input
      type="text"
      placeholder="Search by role, company, location"
      className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
    />

    <div className="flex gap-2 justify-center">
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
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {filteredJobs.map((job) => (
      <JobCard key={job.id} {...job} />
    ))}
  </div>
</div>
  );
};

export default Jobs;