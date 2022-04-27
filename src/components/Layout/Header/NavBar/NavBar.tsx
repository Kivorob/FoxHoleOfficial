import React from 'react';
import style from './NavBar.module.scss';


const NavBar = () => {
	return (
		<div className={style.container}>
			<div className={style.bar}>
				<a href="#">
					<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M3 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
					<span>Все категории</span>
				</a>
				<a href="#">item 1</a>
				<a href="#">item 2</a>
				<a href="#">item 3</a>
				<a href="#">item 4</a>
				<a href="#">item 5</a>
				<a href="#">item 6</a>
				<a href="#">item 7</a>
				<a href="#">item 8</a>
			</div>
		</div>
	);
};

export default NavBar;