// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <div className="flex flex-col p-4 overflow-auto">
      {tasks.map((task) => (
        <Task key={task.id} task={task} completeTask={completeTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
