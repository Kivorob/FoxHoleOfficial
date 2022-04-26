import React from 'react';
import style from './Contact.module.scss';
import Popup from 'reactjs-popup';
import CallBack from "./CallBack/CallBack";


const Contact = () => {
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
		<div className={style.container}>
			<div className={style.contacts}>
				<a href="tel:74232661414">+7 (423) 266-14-14</a>
				<Popup
					trigger={<button className={style.cb}>Обратный звонок</button>}
					modal={true}
					lockScroll={true}
					nested={true}
					contentStyle={contentStyle}
					overlayStyle={overlayStyle}>
					<CallBack/>
				</Popup>
			</div>
		</div>
	);
};

export default Contact;