import React from 'react';
import style from './GameNew.module.scss';


const GameNew = (props: any) => {
	return (
		<a className={style.container} href="#">
			<img src="#" alt=""/>
			<div>
				<p>{props.desc}</p>
			</div>
		</a>
	);
};

export default GameNew;