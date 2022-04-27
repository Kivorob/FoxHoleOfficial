import React from 'react';
import style from './GameTypes.module.scss';
import Name from "../Name/Name";


const GameTypes = () => {
	return (
		<section className={style.container}>
			<Name title="Виды настольных игр"/>
			<div className={style.content}>
				<div>
					<div>
						{/*For icon*/}
						<p>тип1</p>
					</div>
					<div>
						{/*For icon*/}
						<p>тип2</p>
					</div>
					<div>
						{/*For icon*/}
						<p>тип3</p>
					</div>
				</div>
				<div>
					<div>
						{/*For icon*/}
						<p>тип4</p>
					</div>
					<div>
						{/*For icon*/}
						<p>тип5</p>
					</div>
					<div>
						{/*For icon*/}
						<p>тип6</p>
					</div>
				</div>
			</div>
			<div className={style.more}>
				<p>Все виды</p>
				<svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
					 xmlns="http://www.w3.org/2000/svg">
					<path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</section>
	);
};

export default GameTypes;