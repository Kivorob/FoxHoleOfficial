import React from 'react';
import style from './ScrollItem.module.scss';


const ScrollItem = (props: any) => {
	return (
		<li className={style.container}>
			<img src={props.image} alt=""/>
			<a href={props.id}>Подробнее</a>
		</li>
	);
};

export default ScrollItem;