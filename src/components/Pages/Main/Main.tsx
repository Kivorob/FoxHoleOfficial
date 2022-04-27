import React from 'react';
import style from './Main.module.scss';
import ScrollBar from "./ScrollBar/ScrollBar";
import MainFirstBlock from "./MainFirstBlock/MainFirstBlock";
import MainSecondBlock from "./MainSecondBlock/MainSecondBlock";
import Cards from "./Cards/Cards";
import Description from "./Description/Description";
import Quality from "./Quality/Quality";


const Main = () => {
	return (
		<main className={style.container}>
			<ScrollBar/>
			<MainFirstBlock/>
			<MainSecondBlock/>
			<Cards/>
			<Description/>
			<Quality/>
		</main>
	);
};

export default Main;