const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-400">JobPortal</h1>
      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-green-400">Jobs</li>
        <li className="cursor-pointer hover:text-green-400">Companies</li>
        <li className="cursor-pointer hover:text-green-400">Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;