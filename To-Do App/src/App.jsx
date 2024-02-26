// App.js
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterTasks from './components/FilterTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: true };
      }
      return task;
    }));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleFilter = (filter) => {
    switch (filter) {
      case 'completed':
        setTasks(tasks.filter(task => task.completed));
        break;
      case 'active':
        setTasks(tasks.filter(task => !task.completed));
        break;
      default:
        setTasks(tasks);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex w-1/3 h-2/3 bg-white rounded-md shadow-lg">
        <div className="w-full p-4">
          <TaskForm addTask={addTask} />
          <FilterTasks handleFilter={handleFilter} />
          <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
