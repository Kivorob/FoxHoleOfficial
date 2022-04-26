import React from 'react';
import style from './Auth.module.scss';
import Popup from "reactjs-popup";
import AuthPopup from "./AuthPopup/AuthPopup";

const Auth = () => {
	const contentStyle = {
		top: "-180px",
		width: "550px",
		height: "500px",
		borderRadius: "10px",
		background: "#ffffff",
	};
	const overlayStyle = {
		background: "rgba(0,0,0,0.5)",
	};
	return (
		<div className={style.auth}>
			<p>Войдите, чтобы получать бонусы</p>
			<Popup trigger={<button className={style.cb}>Вход</button>}
				   modal={true}
				   lockScroll={true}
				   nested={true}
				   contentStyle={contentStyle}
				   overlayStyle={overlayStyle}>
				<AuthPopup/>
			</Popup>
			<a href="#">Регистрация</a>
		</div>
	);
};

export default Auth;