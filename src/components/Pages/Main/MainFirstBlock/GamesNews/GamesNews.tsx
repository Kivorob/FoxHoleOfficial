import React from 'react';
import style from './GamesNews.module.scss';
import Name from "../../Items/Name/Name";
import GameNew from "./GameNew/GameNew";


const GamesNews = () => {
	return (
		<section className={style.container}>
			<Name title="Новинки"/>
			<div className={style.content}>
				<GameNew desc="Lorem ipsum dolor sit."/>
				<GameNew desc="Lorem ipsum dolor sit amet, consectetur adipisicing."/>
				<GameNew desc="Lorem ipsum dolor sit amet, consectetur."/>
				<GameNew desc="Lorem ipsum."/>
			</div>
			<a href="#" className={style.more}>
				<a>Все новинки</a>
				<svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
					 xmlns="http://www.w3.org/2000/svg">
					<path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</section>
	);
};

export default GamesNews;