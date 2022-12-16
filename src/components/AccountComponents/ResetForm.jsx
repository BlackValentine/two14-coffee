/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

function ResetForm(props) {
	return (
		<div className='login-form__wrap'>
			<div className='login-form'>
				<h2 className='login-form__title'>Account Login</h2>
				<h3>Reset your password</h3>
				<p>We will send you an email to reset your password</p>
				<div className='login-form__field'>
					<span>Email</span>
					<input type='email' placeholder='Email' />
				</div>
				<button className='button--submit'>Submit</button>
				<button className='button--cancel'>Cancel</button>
			</div>
		</div>
	);
}

export default ResetForm;
