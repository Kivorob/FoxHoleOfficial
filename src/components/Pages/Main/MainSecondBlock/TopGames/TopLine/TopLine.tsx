import React from 'react';
import style from './TopLine.module.scss';


const TopLine = (props: any) => {
	let adress = "/" + props.id;
	return (
		<div className={style.container}>
			<a className={style.image} href={adress}> <img src={props.image} alt=""/></a>
			<div className={style.desc}>
				<p className={style.title}><a href={adress}>{props.name}</a></p>
				<div className={style.add}>
					<p>{props.cost} руб.</p>
					<button type="submit">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor"/>
							<path d="M9.99219 11H11.9922M13.9922 11H11.9922M11.9922 11V9M11.9922 11V13" stroke="currentColor"/>
							<path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="currentColor"/>
							<path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="currentColor"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopLine;