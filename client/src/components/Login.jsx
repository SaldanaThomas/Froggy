import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUsername, setPassword, setCurrentUser, setUserDrinks,
} from '../redux/appSlice.js';
import requests from '../utility/requests.js';

const Login = () => {
  const { username, password, currentUser } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const signIn = () => {
    if (username && password) {
      requests.signIn(username, password, (user, drinks) => {
        console.log('sign in', user, drinks);
        dispatch(setCurrentUser(user));
        dispatch(setUserDrinks(drinks));
        localStorage.setItem('logged in', user);
      });
      dispatch(setUsername(''));
      dispatch(setPassword(''));
    }
  };

  const signUp = () => {
    if (username && password) {
      requests.signUp(username, password, (success) => {
        if (success) {
          signIn();
        } else {
          window.alert('Username already taken');
          dispatch(setUsername(''));
          dispatch(setPassword(''));
        }
      });
    }
  };

  const signOut = () => {
    dispatch(setCurrentUser(''));
    dispatch(setUserDrinks([]));
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
              <input id="user" value={username} onChange={(e) => dispatch(setUsername(e.target.value))} autoComplete="off" style={{ backgroundColor: '#e8ba7d' }} />
              <div style={{ display: 'inline-block' }}>Username</div>
            </div>
            <div>
              <input id="password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))} autoComplete="off" style={{ backgroundColor: '#e8ba7d', WebkitTextSecurity: 'disc' }} />
              <div style={{ display: 'inline-block' }}>Password</div>
            </div>
            <button type="button" onClick={signIn} style={{ backgroundColor: '#e8ba7d' }}>Login</button>
            <button type="button" onClick={signUp} style={{ backgroundColor: '#e8ba7d' }}>Sign Up</button>
          </>
        )}
    </div>
  );
};

export default Login;
