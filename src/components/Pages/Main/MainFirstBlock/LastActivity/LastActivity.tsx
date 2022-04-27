import React from 'react';
import style from './LastActivity.module.scss';
import Name from "../../Items/Name/Name";


const LastActivity = () => {
	return (
		<div className={style.container}>
			<Name title="Недавно на сайте"/>
			<div className={style.line}> </div>
			<p className={style.pointf}> </p>
			<p className={style.points}> </p>
			<div className={style.action}>
				<img src="#" alt=""/>
				<p>Событие Lorem ipsum dolor sit aisfoangoajgo apisfjo.</p>
			</div>
			<div className={style.action}>
				<img src="#" alt=""/>
				<p>Событие Lorem ipsum dolor sit aisfoangoajgo apisfjo.</p>
			</div>
		</div>
	);
};

export default LastActivity;