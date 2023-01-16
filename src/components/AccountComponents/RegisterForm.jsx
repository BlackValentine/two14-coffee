/** @format */

import React, { useEffect, useState } from 'react';
import './LoginForm.scss';
import userApi from "../../api/userApi"
import { useNavigate } from 'react-router-dom';

function RegisterForm(props) {
	const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleOnChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleCreateUser = async () => {
		const result = await userApi.createUser(user)
		if (result.data.errCode === 0) {
			setUser({
			  firstName: '',
			  lastName: '',
			  email: '',
			  password: '',
			});
			navigate("/account/login")
		}
  };

  return (
    <div className="login-form__wrap">
      <div className="login-form">
        <h2 className="login-form__title">Create Account</h2>
        <div className="login-form__field">
          <span>First name</span>
          <input
            id="firstName"
            type="text"
            placeholder="First name"
            value={user.firstName}
            onChange={(e) => handleOnChangeInput(e)}
          />
        </div>
        <div className="login-form__field">
          <span>Last name</span>
          <input
            id="lastName"
            type="text"
            placeholder="Last name"
            value={user.lastName}
            onChange={(e) => handleOnChangeInput(e)}
          />
        </div>
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
        </div>
        <button className="button--submit" onClick={handleCreateUser}>
          Create
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
