import { useNavigate } from "react-router-dom";

const JobCard = ({ id,title, company, location, type, }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white border rounded-lg p-5 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{company}</p>
      <p className="text-sm text-gray-500">{location}</p>

      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
          {type}
        </span>
        <button
  onClick={() => navigate(`/jobs/${id}`)}
  className="text-sm text-white bg-black px-4 py-1 rounded hover:bg-gray-800"
>View
</button>
      </div>
    </div>
  );
};

export default JobCard;