import React, { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // You can perform the search operation here with the "searchQuery" state.
    // For example, you can send an API request to fetch search results.
    console.log("Search Query:", searchQuery);
    // Add your search logic here...
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter keyword..."
        value={searchQuery}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-md p-2 mr-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded-md p-2"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
