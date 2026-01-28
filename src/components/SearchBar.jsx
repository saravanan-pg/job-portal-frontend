import { useEffect, useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 400);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search jobs, company, location..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full max-w-md px-4 py-2 border rounded-md focus:outline-none focus:ring"
    />
  );
};

export default SearchBar