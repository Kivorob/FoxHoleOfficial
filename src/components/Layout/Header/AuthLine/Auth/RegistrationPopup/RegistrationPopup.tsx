import React from 'react';
import style from './RegistrationPopup.module.scss';


async function saveUser(data?: any) {
	return fetch('http://localhost:8000/api/register', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => res.json());
}


function RegistrationPopup({
							   auth,
							   user,
							   setUser,
							   setAuthorised
						   }: { auth?: any, user?: any, setAuthorised?: any, setUser?: any }) {
	const onSubmit = async (event?: any) => {
		
		event.preventDefault();
		const data = {
			name: event.target.elements.name.value,
			telephone: event.target.elements.telephone.value,
			email: event.target.elements.email.value,
			password: event.target.password.value
		}
		console.log(data);
		let token;
		token = await saveUser(data).catch(err => token = {token: 'error'});
		console.log(token);
		if (token.token !== 'error') {
			localStorage.setItem('token', token.token);
			user = token.user;
			setUser(user);
			auth = true;
			setAuthorised(auth);
		}
	}
	return (
		<form onSubmit={onSubmit} className={style.container}>
			<p className={style.title}>Регистрация</p>
			<div className={style.input}>
				<input type="text" id="name" placeholder="Имя"/>
				<input type="text" id="telephone" placeholder="Номер телефона"/>
				<input type="text" id="email" placeholder="Электронная почта"/>
				<input type="password" id="password" placeholder="Пароль"/>
				<button type="submit">Регистрация</button>
			</div>
			<div className={style.regform}>
				<a href="#">Вход</a>
			</div>
		</form>
	);
};

export default RegistrationPopup;