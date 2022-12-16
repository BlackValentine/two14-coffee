import React from 'react';
import { Link } from 'react-router-dom';
import "./LoginForm.scss"

function LoginForm(props) {
  return (
		<div className='login-form__wrap'>
			<div className='login-form'>
				<h2 className='login-form__title'>Account Login</h2>
				<div className='login-form__field'>
					<span>Email</span>
					<input type='email' placeholder='Email' />
				</div>
				<div className='login-form__field'>
					<span>Password</span>
					<input type='text' placeholder='Password' />
					<Link to={'/account/reset'}>
						<p className='login-form__link'>Forgot your password?</p>
					</Link>
				</div>
				<button className="button--submit">Sign In</button>
				<Link to={'/account/register'}>
					<p className='login-form__link'>Create Account</p>
				</Link>
			</div>
		</div>
	);
}

export default LoginForm;