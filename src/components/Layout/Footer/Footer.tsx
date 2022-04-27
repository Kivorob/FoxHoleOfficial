import React from 'react';
import InfoBar from "./InfoBar/InfoBar";
import CopyRightLine from "./CopyRightLine/CopyRightLine";
import style from "./Footer.module.scss"

const Footer = () => {
	return (
		<footer className={style.container}>
			<InfoBar/>
			<CopyRightLine/>
		</footer>
	);
};

export default Footer;