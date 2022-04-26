import React from 'react';
import style from './Auth.module.scss';

const Auth = () => {
	return (
		<div className={style.auth}>
			<p>Войдите, чтобы получать бонусы</p>
			<a href="#">Вход</a>
			<a href="#">Регистрация</a>
		</div>
	);
};

export default Auth;