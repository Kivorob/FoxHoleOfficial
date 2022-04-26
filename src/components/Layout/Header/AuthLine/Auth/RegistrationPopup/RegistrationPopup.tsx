import React from 'react';
import style from './RegistrationPopup.module.scss';

const RegistrationPopup = () => {
	return (
		<form action="#" className={style.container}>
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