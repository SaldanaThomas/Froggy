import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input id="user" />
      User
      <input id="password" />
      Password
      <button type="button">Login</button>
    </div>
  );
};

export default Login;
