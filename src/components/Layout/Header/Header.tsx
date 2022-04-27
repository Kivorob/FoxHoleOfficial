import React from 'react';
import style from './Header.module.scss';
import HeaderLine from "./HeaderLine/HeaderLine";
import AuthLine from "./AuthLine/AuthLine";
import Search from "./Search/Search";
import NavBar from "./NavBar/NavBar";


const Header = () => {
	return (
		<header>
			<HeaderLine/>
			<AuthLine/>
			<Search/>
			<NavBar/>
		</header>
	);
};

export default Header;