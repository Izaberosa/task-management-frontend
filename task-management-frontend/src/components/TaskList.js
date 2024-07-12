import React, { useEffect, useState } from 'react';
import taskService from '../services/taskService';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.getTasks().then(data => setTasks(data));
  }, []);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

export default TaskList;
