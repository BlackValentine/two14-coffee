/** @format */

import React from 'react';
import './LoginForm.scss';

function RegisterForm(props) {
	return (
		<div className='login-form__wrap'>
			<div className='login-form'>
				<h2 className='login-form__title'>Create Account</h2>
				<div className='login-form__field'>
					<span>First name</span>
					<input type='text' placeholder='First name' />
				</div>
				<div className='login-form__field'>
					<span>Last name</span>
					<input type='text' placeholder='Last name' />
				</div>
				<div className='login-form__field'>
					<span>Email</span>
					<input type='email' placeholder='Email' />
				</div>
				<div className='login-form__field'>
					<span>Password</span>
					<input type='password' placeholder='Password' />
				</div>
				<button className='button--submit'>Create</button>
			</div>
		</div>
	);
}

export default RegisterForm;
