import React, {useEffect, useState} from 'react';
import style from './AuthPopup.module.scss';


async function loginUser(data?: any) {
	return fetch('http://localhost:8000/api/login', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => res.json())
}

function AuthPopup ({auth, setAuthorised, user, setUser}: {auth?: any, setAuthorised?: any, user?: any, setUser?: any}) {

	const handleSubmit = async (event?: any) => {
		event.preventDefault();
		console.log(event);
		const data = {
			telephone: event.target.elements.telephone.value,
			password: event.target.elements.password.value
		}
		let token;
		token = await loginUser(data).catch(err => token = {token: 'error'});
		if (token.token !== 'error') {
			console.log(token);
			auth = true;
			setAuthorised(auth);
			user = token.user;
			setUser(user);
			localStorage.setItem('token', token.token);
			console.log(localStorage.getItem("token"));
			console.log(user)
		}

	}

	return (
		<form onSubmit={handleSubmit} className={style.container}>
			<p className={style.title}>Вход</p>
			<div className={style.input}>
				<input type="text" id="telephone" placeholder="Номер телефона"/>
				<input type="password" id="password" placeholder="Пароль"/>
				<button type="submit">Вход</button>
			</div>
			<div className={style.regform}>
				<a href="#">Регистрация</a>
			</div>
		</form>
	)
}

export default AuthPopup;