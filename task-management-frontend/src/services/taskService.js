const API_URL = 'http://localhost:5000';

const getTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
};

const createTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });
  return response.json();
};

export default { getTasks, createTask };
