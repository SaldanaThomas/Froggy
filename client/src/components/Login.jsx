import React, { useState } from 'react';
import axios from 'axios';

const Login = ({
  getUserLogin, currentUser, setCurrentUser, setUserDrinks,
}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const getUser = () => {
    event.preventDefault();
    if (user.length && password.length) {
      console.log(user, password);
      getUserLogin(user, password);
      setUser('');
      setPassword('');
    }
  };

  const addUser = () => {
    event.preventDefault();
    if (user.length && password.length) {
      axios.post('/user', { user, password, drinks: [] })
        .then(() => {
          getUser();
        })
        .catch((err) => {
          console.error(err);
          setUser('');
          setPassword('');
        });
    }
  };

  const signOut = () => {
    event.preventDefault();
    setCurrentUser('');
    setUserDrinks([]);
  };

  return (
    <div>
      <div>
        <input id="user" value={user} onChange={(e) => setUser(e.target.value)} style={{ backgroundColor: '#e8ba7d' }} />
        <div style={{ display: 'inline-block' }}>Username</div>
      </div>
      <div>
        <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ backgroundColor: '#e8ba7d', WebkitTextSecurity: 'disc' }} />
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
