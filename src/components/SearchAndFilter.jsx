import React from "react";

const SearchAndFilter = ({ searchTerm, setSearchTerm, filterType, setFilterType, sortOption, setSortOption }) => {
  return (
    <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <input
        type="text"
        placeholder="Search blogs..."
        className="p-2 rounded border border-gray-300 w-full md:w-1/3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <select
          className="p-2 rounded border border-gray-300 w-full md:w-auto"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Technology">Technology</option>
          <option value="Design">Design</option>
          <option value="Health">Health</option>
          <option value="Travel">Travel</option>
          <option value="Photography">Photography</option>
          <option value="Food">Food</option>
        </select>
        <select
          className="p-2 rounded border border-gray-300 w-full md:w-auto"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="Likes">Most Likes</option>
          <option value="Date">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
