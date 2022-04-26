import React from 'react';
import style from './Search.module.scss';
import Logo from '../../../Logo/Logo';
import SearchBar from "./SearchBar/SearchBar";
import Busket from "./Busket/Busket";
import Contact from "./Contact/Contact";


const Search = () => {
	return (
		<div className={style.container}>
			<div className={style.search}>
				<Logo/>
				<SearchBar/>
				<Busket/>
				<Contact/>
			</div>
		</div>
	);
};

export default Search;