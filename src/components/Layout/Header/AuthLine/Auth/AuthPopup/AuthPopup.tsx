import React from 'react';
import style from './AuthPopup.module.scss';

const AuthPopup = () => {
	return (
		<form action="#" className={style.container}>
			<p className={style.title}>Вход</p>
			<div className={style.input}>
				<input type="text" id="login" placeholder="Номер телефона"/>
				<input type="password" id="password" placeholder="Пароль"/>
				<button type="submit">Вход</button>
			</div>
			<div className={style.regform}>
				<a href="#">Регистрация</a>
			</div>
		</form>
	);
};

export default AuthPopup;