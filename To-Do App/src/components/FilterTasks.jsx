// FilterTasks.js
import React from 'react';

const FilterTasks = ({ handleFilter }) => {
  return (
    <div className="flex justify-center items-center mb-4">
      <button onClick={() => handleFilter('all')} className="mx-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none">All</button>
      <button onClick={() => handleFilter('completed')} className="mx-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none">Completed</button>
      <button onClick={() => handleFilter('active')} className="mx-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none">Active</button>
    </div>
  );
};

export default FilterTasks;
