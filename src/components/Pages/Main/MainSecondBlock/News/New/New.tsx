import React from 'react';
import style from './New.module.scss';


const New = (props: any) => {
	let adress = "/" + props.id;
	return (
		<a href={adress} className={style.container}>
			<p className={style.title}>{props.title}</p>
			<p className={style.desc}>{props.desc}</p>
			<p className={style.date}>{props.date}</p>
		</a>
	);
};

export default New;