import React from 'react';
import style from './News.module.scss';
import Name from "../../Items/Name/Name";
import New from "./New/New";

const News = () => {
	let data = [
		{
			title: "АМОГУ",
			description: "ОН ПРИШЕЛ",
			date: "28 апр 2022",
			id: "1"
		},
		{
			title: "АМОГУС",
			description: "ОН ПРИШЕЛ",
			date: "28 апр 2022",
			id: "2"
		},
		{
			title: "АМОГУС",
			description: "ОН ПРИШЕЛ",
			date: "28 апр 2022",
			id: "3"
		},
		{
			title: "АМОГУСsss",
			description: "ОН ПРИШЕЛ",
			date: "28 апр 2022",
			id: "4"
		}
	]
	
	let main = data[3];
	data.pop();
	
	return (
		<div className={style.container}>
			<Name title="Новости"/>
			<a href="#" className={style.main}>
				<img src="#" alt=""/>
				<div>
					<p className={style.title}>{main.title}</p>
					<p className={style.desc}>{main.description}</p>
					<p className={style.date}>{main.date}</p>
				</div>
			</a>
			<div className={style.another}>
				{data.map(item => <New title={item.title} desc={item.description} date={item.date}/>)}
			</div>
			<a href="#" className={style.more}>
				<p>Все виды</p>
				<svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
					 xmlns="http://www.w3.org/2000/svg">
					<path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>
	);
};

export default News;