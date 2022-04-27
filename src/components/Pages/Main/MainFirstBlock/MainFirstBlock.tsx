import React from 'react';
import style from './MainFirstBlock.module.scss';
import GameTypes from "./GameTypes/GameTypes";
import Parametrs from "./Parametrs/Parametrs";
import GamesNews from "./GamesNews/GamesNews";
import DailyGame from "./DailyGame/DailyGame";
import LastActivity from "./LastActivity/LastActivity";
import MiniCatalog from "./MiniCatalog/MiniСatalog";

const MainFirstBlock = () => {
	return (
		<section className={style.container}>
			<MiniCatalog/>
			<GameTypes/>
			<Parametrs/>
			<GamesNews/>
			<DailyGame/>
			<LastActivity/>
		</section>
	);
};

export default MainFirstBlock;