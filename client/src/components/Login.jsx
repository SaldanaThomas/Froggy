import React, { useState } from 'react';
import requests from '../utility/requests.js';

const Login = ({
  currentUser, setCurrentUser, setUserDrinks,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getUser = () => {
    if (username && password) {
      requests.getUserLogin(username, password, (user, drinks) => {
        setCurrentUser(user);
        setUserDrinks(drinks);
        localStorage.setItem('logged in', user);
      });
      setUsername('');
      setPassword('');
    }
  };

  const addUser = () => {
    if (username && password) {
      requests.addUser(username, password, (success) => {
        if (success) {
          getUser();
        } else {
          window.alert('Username already taken');
          setUsername('');
          setPassword('');
        }
      });
    }
  };

  const signOut = () => {
    setCurrentUser('');
    setUserDrinks([]);
    localStorage.clear();
  };

  return (
    <div>
      {currentUser
        ? (
          <div>
            {`Current User: ${currentUser}  `}
            <button type="button" onClick={signOut} style={{ backgroundColor: '#e8ba7d' }}>Sign Out</button>
          </div>
        )
        : (
          <>
            <div>
              <input id="user" value={username} onChange={(e) => setUsername(e.target.value)} style={{ backgroundColor: '#e8ba7d' }} />
              <div style={{ display: 'inline-block' }}>Username</div>
            </div>
            <div>
              <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ backgroundColor: '#e8ba7d', WebkitTextSecurity: 'disc' }} />
              <div style={{ display: 'inline-block' }}>Password</div>
            </div>
            <button type="button" onClick={getUser} style={{ backgroundColor: '#e8ba7d' }}>Login</button>
            <button type="button" onClick={addUser} style={{ backgroundColor: '#e8ba7d' }}>Sign Up</button>
          </>
        )}
    </div>
  );
};

export default Login;
