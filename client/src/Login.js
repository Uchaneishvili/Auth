/** @format */

import React from 'react';
import { login } from './api';
import { DatePicker, notification } from 'antd';

export const Login = () => {
	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			await login(event.target.email.value, event.target.password.value);
			notification.success({
				message: 'Success',
				description: 'Successful Authentication',
			});
		} catch (error) {
			console.error(error);
			notification.error({
				message: 'Failed',
				description: 'Please try again !',
			});
		}
	};

	return (
		<>
			<DatePicker />
			<form onSubmit={onSubmit}>
				<div className='container'>
					<div className='screen'>
						<div className='screen__content'>
							<div className='login__field'>
								<div>
									<label>
										<input
											name='email'
											type='email'
											placeholder='Email'
											className='login__input'
										/>
									</label>
								</div>
							</div>
							<div className='login__field'>
								<label>
									<input
										name='password'
										type='password'
										placeholder='Password'
										className='login__input'
									/>
								</label>
							</div>
							<button
								className='button login__submit'
								type='submit'>
								<span className='button__text'>Log In Now</span>
								<i className='button__icon fas fa-chevron-right'></i>
							</button>
						</div>
						<div className='screen__background'>
							<span className='screen__background__shape screen__background__shape4'></span>
							<span className='screen__background__shape screen__background__shape3'></span>
							<span className='screen__background__shape screen__background__shape2'></span>
							<span className='screen__background__shape screen__background__shape1'></span>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};
