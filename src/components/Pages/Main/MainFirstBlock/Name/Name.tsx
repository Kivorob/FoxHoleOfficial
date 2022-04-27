import React from 'react';
import style from './Name.module.scss';


const Name = (props: any) => {
	return (
		<div className={style.title}>
			<p>{props.title}</p>
		</div>
	);
};

export default Name;