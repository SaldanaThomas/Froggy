import React from 'react';
import axios from 'axios';

const Login = ({ getUserDrinks }) => {
  const getUser = () => {
    event.preventDefault();
    getUserDrinks(document.getElementById('user').value);
  };

  const addUser = () => {
    event.preventDefault();
    const user = document.getElementById('user').value;
    axios.post('/user', { user, drinks: [] })
      .then(() => getUser())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        <input id="user" style={{ backgroundColor: '#e8ba7d' }} />
        <div style={{ display: 'inline-block' }}>Username</div>
      </div>
      <div>
        <input id="password" style={{ backgroundColor: '#e8ba7d' }} />
        <div style={{ display: 'inline-block' }}>Password</div>
      </div>
      <button type="button" onClick={getUser} style={{ backgroundColor: '#e8ba7d' }}>
        Login
      </button>
      <button type="button" onClick={addUser} style={{ backgroundColor: '#e8ba7d' }}>
        Sign Up
      </button>
    </div>
  );
};

export default Login;
