import { useEffect, useState } from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search by role, company, location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />
    </div>
  );
};

export default SearchBar;