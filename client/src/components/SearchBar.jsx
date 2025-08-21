import React from "react";

function SearchBar({ setQuery }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="ค้นหาที่เที่ยว..."
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}

export default SearchBar;
