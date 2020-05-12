import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import history from '../history';

import './LoginStyle.css';

const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.main);

  useEffect(() => {
    if (users.isLoggedIn) {
      history.push('/dashboard');
    }
  }, [users.isLoggedIn]);

  const loginHandler = (ev) => {
    ev.preventDefault();
    if (users.username === username && users.password === password) {
      dispatch({type: 'LOGIN_USER'});
    } else {
      setErrorMsg('Invalid username or password');
    }
  };

  return (
    <div>
      <form id='myForm' onSubmit={loginHandler}>
        <input
          type='text'
          name='username'
          placeholder='User Name'
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type='text'
          name='password'
          placeholder='Password'
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <br />
        <input type='submit' />
        <p>{errorMsg}</p>
      </form>
    </div>
  );
};

export default LoginPage;
