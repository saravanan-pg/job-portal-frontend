import { useParams, useNavigate } from "react-router-dom";

const dummyJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    type: "Full-time",
    description:
      "Work on modern frontend systems using React and scalable UI architecture.",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Amazon",
    location: "Hyderabad",
    type: "Remote",
    description:
      "Build high-performance React applications used by millions.",
  },
  {
    id: 3,
      title: "UI Engineer",
      company: "Microsoft",
      location: "Chennai",
      type: "Internship",
      description:
      "Design intuitive user interfeaces with a focus on user experience.",
  },
  {
    id:4,
        title:"Backend Developer",
        company:"Zoho",
        location:"coimbatore",
        type:"Full-time",
        description:
        "Develope and maintain server-side logic and databases for web applications.",
  },
  {
    id:5,
        title:"Full Stack Developer",
        company:"Infosys",
        location:"Hyderabad",
        type:"Remote",
        description:
        "work on both frontend and backend technologies to build complete web solutions.",
  },
  {
     id:6,
        title:"Data Analyst",
        company:"Deloitte",
        location:"Bangalore",
        type:"Internship",
        description:
        "Analyze and interpret complex data sets to help inform business decisions.",
  },
  ];

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = dummyJobs.find((j) => j.id === Number(id));

  if (!job) {
    return <p className="text-center mt-10">Job not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600 mt-2">
        {job.company} • {job.location}
      </p>

      <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        {job.type}
      </span>

      <p className="mt-6 text-gray-700">{job.description}</p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-black text-white rounded"
      >
        Back
      </button>
    </div>
  );
};

export default JobDetails;