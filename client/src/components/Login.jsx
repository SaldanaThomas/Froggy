import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div>
        <input id="user" />
        Username
      </div>
      <div>
        <input id="password" />
        Password
      </div>
      <button type="button">Login</button>
    </div>
  );
};

export default Login;
