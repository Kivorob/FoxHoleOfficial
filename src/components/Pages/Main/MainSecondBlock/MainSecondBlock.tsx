import React from 'react';
import style from './MainSecondBlock.module.scss';
import TopGames from "./TopGames/TopGames";
import Videos from "./Videos/Videos";
import News from "./News/News";


const MainSecondBlock = () => {
	return (
		<section className={style.container}>
			<TopGames/>
			<Videos/>
			<News/>
		</section>
	);
};

export default MainSecondBlock;