import React from 'react';
import style from './MainFirstBlock.module.scss';
import GameTypes from "./GameTypes/GameTypes";
import Parametrs from "./Parametrs/Parametrs";
import GamesNews from "./GamesNews/GamesNews";
import DailyGame from "./DailyGame/DailyGame";
import LastActivity from "./LastActivity/LastActivity";
import MiniСatalog from "./MiniCatalog/MiniСatalog";

const MainFirstBlock = () => {
	return (
		<div className={style.container}>
			<MiniСatalog/>
			<GameTypes/>
			<Parametrs/>
			<GamesNews/>
			<DailyGame/>
			<LastActivity/>
		</div>
	);
};

export default MainFirstBlock;