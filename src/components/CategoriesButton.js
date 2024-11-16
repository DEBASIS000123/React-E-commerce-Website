import React, { useState, useEffect } from 'react';

function Categories({ categories, filterItems }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Handle category change
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  // Trigger category filter whenever the selected category changes
  useEffect(() => {
    filterItems(selectedCategory);
  }, [selectedCategory, filterItems]);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center p-4">
      <span className="font-semibold mr-2">Categories:</span>
      <select
        name="category"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        id="category"
        className="bg-[#9f2089] text-white font-bold rounded-md p-2 hover:bg-pink-500 transition duration-300 ease-in-out"
      >
        {categories.map((category, index) => (
          <option key={index} value={category} className="font-semibold">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;
