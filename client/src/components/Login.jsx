import React from 'react';
import axios from 'axios';

const Login = ({
  getUserDrinks, currentUser, setCurrentUser, setUserDrinks,
}) => {
  const getUser = () => {
    event.preventDefault();
    getUserDrinks(document.getElementById('user').value);
    document.getElementById('user').value = '';
  };

  const addUser = () => {
    event.preventDefault();
    const user = document.getElementById('user').value;
    axios.post('/user', { user, drinks: [] })
      .then(() => {
        document.getElementById('user').value = '';
        getUser();
      })
      .catch((err) => console.error(err));
  };

  const signOut = () => {
    event.preventDefault();
    setCurrentUser('');
    setUserDrinks([]);
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

      {currentUser.length ? (
        <button type="button" onClick={signOut} style={{ backgroundColor: '#e8ba7d' }}>
          Sign Out
        </button>
      ) : (
        <button type="button" onClick={addUser} style={{ backgroundColor: '#e8ba7d' }}>
          Sign Up
        </button>
      )}
      {currentUser.length ? <div>{`Current User: ${currentUser}`}</div> : null}
    </div>
  );
};

export default Login;
