import React, {useRef} from 'react';
import style from './Auth.module.scss';
import Popup from "reactjs-popup";
import AuthPopup from "./AuthPopup/AuthPopup";
import RegistrationPopup from "./RegistrationPopup/RegistrationPopup";

const Auth = () => {
	const contentStyleAuth = {
		top: "-180px",
		width: "550px",
		height: "500px",
		borderRadius: "10px",
		background: "#ffffff",
	};
	const contentStyleRegistration = {
		top: "-80px",
		width: "550px",
		height: "700px",
		borderRadius: "10px",
		background: "#ffffff",
	};
	const overlayStyle = {
		background: "rgba(0,0,0,0.5)",
	};
	// const log = useRef();
	// const openlog = () => log.current.open();
	// const closelog = () => log.current.close();
	// const reg = useRef();
	// const openreg = () => reg.current.open();
	// const closereg = () => reg.current.close();
	return (
		<div className={style.auth}>
			<p>Войдите, чтобы получать бонусы</p>
			<Popup
				// ref={log}
				trigger={<button className={style.cb}>Вход</button>}
				modal={true}
				lockScroll={true}
				nested={true}
				contentStyle={contentStyleAuth}
				overlayStyle={overlayStyle}>
				<AuthPopup/>
			</Popup>
			<Popup
				// ref={reg}
				trigger={<button className={style.cb}>Регистрация</button>}
				modal={true}
				lockScroll={true}
				nested={true}
				contentStyle={contentStyleRegistration}
				overlayStyle={overlayStyle}>
				<RegistrationPopup/>
			</Popup>
		</div>
	);
};

export default Auth;