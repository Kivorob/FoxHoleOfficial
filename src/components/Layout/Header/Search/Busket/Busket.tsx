import React from 'react';
import style from './Busket.module.scss';


const Busket = () => {
	return (
		<div className={style.container}>
			<a className={style.busket} href="#">
				<div>
					<svg width="30" height="30" viewBox="0 0 24 24" fill="none"
						 xmlns="http://www.w3.org/2000/svg">
						<path
							d="M19.5 22C20.3284 22 21 21.3284 21 20.5C21 19.6716 20.3284 19 19.5 19C18.6716 19 18 19.6716 18 20.5C18 21.3284 18.6716 22 19.5 22Z"
							fill="currentColor" stroke="currentColor"/>
						<path
							d="M9.5 22C10.3284 22 11 21.3284 11 20.5C11 19.6716 10.3284 19 9.5 19C8.67157 19 8 19.6716 8 20.5C8 21.3284 8.67157 22 9.5 22Z"
							fill="currentColor" stroke="currentColor"/>
						<path d="M5 4H22L20 15H7L5 4ZM5 4C4.83333 3.33333 4 2 2 2" stroke="currentColor"/>
						<path d="M20 15H7H5.23077C3.44646 15 2.5 15.7812 2.5 17C2.5 18.2188 3.44646 19 5.23077 19H19.5"
							  stroke="currentColor"/>
					</svg>
					<p>Корзина</p>
				</div>
			</a>
		</div>
	);
};

export default Busket;