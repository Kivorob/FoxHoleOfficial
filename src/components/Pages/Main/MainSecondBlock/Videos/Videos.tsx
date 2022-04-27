import React from 'react';
import style from './Videos.module.scss';
import Name from "../../Items/Name/Name";
import Video from "./Video/Video";


const Videos = () => {
	let data = [
		{
			url: "https://www.youtube.com/embed/jH4YlcYY18c",
			date: "15 апреля 2022 18:42",
			title: "Абобус"
		},
		{
			url: "https://www.youtube.com/embed/jH4YlcYY18c",
			date: "15 апреля 2022 18:42",
			title: "Абобус"
		},
		{
			url: "https://www.youtube.com/embed/jH4YlcYY18c",
			date: "15 апреля 2022 18:42",
			title: "Абобус"
		},
		{
			url: "https://www.youtube.com/embed/jH4YlcYY18c",
			date: "15 апреля 2022 18:42",
			title: "Абобус"
		},
		{
			url: "https://www.youtube.com/embed/jH4YlcYY18c",
			date: "15 апреля 2022 18:42",
			title: "Абобус"
		},
		{
			url: "https://www.youtube.com/embed/jH4YlcYY18c",
			date: "15 апреля 2022 18:42",
			title: "Абобус"
		}
	]
	return (
		<div className={style.container}>
			<Name title="Видео"/>
			<div className={style.content}>
				{data.map(item => <Video url={item.url} date={item.date} title={item.title}/>)}
			</div>
			<a href="#" className={style.more}>
				<p>Все видео</p>
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none"
					 xmlns="http://www.w3.org/2000/svg">
					<path d="M9 6L15 12L9 18" stroke="currentColor"/>
				</svg>
			</a>
		</div>
	);
};

export default Videos;