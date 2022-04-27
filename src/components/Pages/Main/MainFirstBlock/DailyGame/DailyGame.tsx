import React from 'react';
import style from './DailyGame.module.scss';
import Name from "../Name/Name";


const DailyGame = () => {
	return (
		<section className={style.container}>
			<Name title="Игра дня"/>
			<div className={style.content}>
				<div className={style.desc}>
					<h1>Название</h1>
					<p>Описани Lorem ipsum.</p>
				</div>
				<div className={style.item}>
					<img src="#" alt=""/>
				</div>
			</div>
			<div className={style.btn}>
				<button>
					<p className={style.new}>Цена</p>
					<p className={style.last}>старая цена</p>
				</button>
			</div>
		</section>
	);
};

export default DailyGame;