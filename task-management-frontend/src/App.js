import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1>Gerenciamento de Tarefas</h1>
      <TaskForm />
      <TaskList />
      <UserList />
    </div>
  );
}

export default App;

