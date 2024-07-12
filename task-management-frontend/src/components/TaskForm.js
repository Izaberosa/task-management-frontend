import React, { useState } from 'react';
import taskService from '../services/taskService';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    taskService.createTask({ title, description }).then(task => {
      // Atualizar a lista de tarefas após criar uma nova tarefa
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default TaskForm;
