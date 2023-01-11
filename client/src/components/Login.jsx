import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

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
      <button type="button" style={{ backgroundColor: '#e8ba7d' }}>
        Login
      </button>
      <button type="button" style={{ backgroundColor: '#e8ba7d' }}>
        Sign Up
      </button>
    </div>
  );
};

export default Login;
