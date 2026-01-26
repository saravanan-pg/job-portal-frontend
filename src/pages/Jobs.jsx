import { useState } from "react";
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

  const[filter, setFilter]=useState("All");

  const filteredJobs=filter === "All" ? jobs: jobs.filter((job)=> job.type === filter);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Available Jobs</h1>

        <div className="flex justify-center gap-4 mb-8">
            {["All", "Full-time", "Remote", "Internship"].map((item)=> (
                <button
                key={item}
                onClick={()=>setFilter(item)}
                className={`px-4 py-2 rounded${filter === item ? "bg-black text-white":"bg-white border"}`}>
                    {item}
                </button>
            ))}
            </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
        </div>
    </div>
  );
};

export default Jobs;