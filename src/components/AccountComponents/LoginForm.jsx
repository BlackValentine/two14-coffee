import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../store/api';
import './LoginForm.scss';

function LoginForm(props) {
	const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleOnChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

	const handleLogin = () => {
		dispatch(login(user));
	}

  return (
    <div className="login-form__wrap">
      <div className="login-form">
        <h2 className="login-form__title">Account Login</h2>
        <div className="login-form__field">
          <span>Email</span>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => handleOnChangeInput(e)}
          />
        </div>
        <div className="login-form__field">
          <span>Password</span>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => handleOnChangeInput(e)}
          />
          <Link to={'/account/reset'}>
            <p className="login-form__link">Forgot your password?</p>
          </Link>
        </div>
        <button className="button--submit" onClick={handleLogin}>Sign In</button>
        <Link to={'/account/register'}>
          <p className="login-form__link">Create Account</p>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
