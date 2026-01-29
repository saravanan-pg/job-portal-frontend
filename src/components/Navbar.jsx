import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold text-lg">JobPortal</h1>

      <div className="flex gap-6">
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : ""
          }
        >
          Jobs
        </NavLink>

        <NavLink
          to="/companies"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : ""
          }
        >
          Companies
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : ""
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;