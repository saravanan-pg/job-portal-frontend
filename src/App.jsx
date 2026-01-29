import { Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobCard from "./components/Jobcard";
import JobDetails from "./pages/JobDetails";
import Navbar from "./components/Navbar";
import Companies from "./pages/Companies";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/companies" element={<Companies />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;