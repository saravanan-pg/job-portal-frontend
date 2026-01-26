import Navbar  from "./components/Navbar";
import JobCard from "./components/Jobcard";
import Jobs from "./pages/Jobs";

const App=() => {
  return(
    <div>
      <Navbar/>
      <Jobs/>
    </div>
  )
}
export default App;