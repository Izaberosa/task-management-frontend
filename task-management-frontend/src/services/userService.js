const USER_API_URL = 'http://localhost:5001';

const getUsers = async () => {
  const response = await fetch(`${USER_API_URL}/users`);
  return response.json();
};

export default { getUsers };
