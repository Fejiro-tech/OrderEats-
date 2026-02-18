// src/components/FilterBar.jsx
import React from "react";

const FilterBar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-6 py-2 rounded-full border font-semibold transition-colors duration-200
            ${selectedCategory === cat ? "bg-black text-white" : "bg-white text-black hover:bg-gray-200"}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
