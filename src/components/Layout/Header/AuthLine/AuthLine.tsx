import React from 'react';
import style from './AuthLine.module.scss';
import Auth from "./Auth/Auth";
import Profile from "./Profile/Profile";

const AuthLine = () => {
	return (
		<section className={style.container}>
			<div className={style.item}>
				<div className={style.locate}>
					<p>Адреса магазинов</p>
				</div>
				<Auth/>
				{/*<Profile/>*/}
			</div>
		</section>
	);
};

export default AuthLine;