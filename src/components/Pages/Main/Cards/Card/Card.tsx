import React from 'react';
import style from './Card.module.scss';


const Card = (props: any) => {
	return (
		<div className={style.container}>
			<div className={style.product}>
				<a className={style.image} href="#">
					<img src={props.image} alt=""/>
				</a>
				<a href="#">{props.title}</a>
				<p>{props.description}</p>
			</div>
			<div className={style.buy}>
				<button type="submit">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor"/>
						<path d="M9.99219 11H11.9922M13.9922 11H11.9922M11.9922 11V9M11.9922 11V13"
							  stroke="currentColor"/>
						<path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5"
							  stroke="currentColor"/>
						<path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5"
							  stroke="currentColor"/>
					</svg>
					<p>{props.cost} руб.</p>
				</button>
				<div className={style.info}>
					<div>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="black">
							<path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
								  stroke="currentColor"/>
							<path
								d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
								stroke="currentColor"/>
						</svg>
						<p>{props.countplayers}</p>
					</div>
					<p className={style.old}>{props.old}+</p>
				</div>
			</div>
		</div>
	);
};

export default Card;