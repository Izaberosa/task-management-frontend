import React, { useEffect, useState } from 'react';
import userService from '../services/userService';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getUsers().then(data => setUsers(data.results));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.login.uuid}>{user.name.first} {user.name.last}</li>
      ))}
    </ul>
  );
}

export default UserList;
