import { Routes,Route } from "react-router-dom";
import Navbar  from "./components/Navbar";
import JobCard from "./components/Jobcard";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";

const App=() => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Jobs />}/>
        <Route path="/jobs/:id" element={<JobDetails />}/>
      </Routes>
    </>
  );
}
export default App;