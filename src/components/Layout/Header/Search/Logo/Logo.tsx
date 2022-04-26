import React from 'react';
import style from './Logo.module.scss';

const logo = require("../../../../../img/Logo.png")

const Logo = () => {
	return (
		<div className={style.container}>
			<img src={logo} alt=""/>
		</div>
	);
};

export default Logo;