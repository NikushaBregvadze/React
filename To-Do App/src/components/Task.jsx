// Task.js
import React from 'react';

const Task = ({ task, completeTask, deleteTask }) => {
  return (
    <div className={`flex items-center justify-between py-2 border-b border-gray-300 ${task.completed ? 'bg-gray-100' : 'bg-white'}`}>
      <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>{task.text}</span>
      <div className="flex items-center space-x-2">
        {!task.completed && (
          <button onClick={() => completeTask(task.id)} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        )}
        <button onClick={() => deleteTask(task.id)} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Task;
