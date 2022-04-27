import React from 'react';
import style from './Parametrs.module.scss';
import Name from "../../Items/Name/Name";


const Parametrs = () => {
	return (
		<form action="#" className={style.container}>
			<Name title="Параметры"/>
			<div className={style.content}>
				<div>
					<label htmlFor="cost">Цена:</label>
					<input id="cost" name="cost" min="0" max="5" list="costlist" type="range"/>
					<datalist id="costlist">
						<option value="0" label="Любая стоимость">Любая стоимость</option>
						<option value="1" label="400">400</option>
						<option value="2" label="800">800</option>
						<option value="3" label="1 200">1200</option>
						<option value="4" label="3 000">3000</option>
						<option value="5" label="max">max</option>
					</datalist>
				</div>
				<div>
					<label htmlFor="players">Число игроков</label>
					<input id="players" name="players" min="0" max="7" list="playerslist" type="range"/>
					<datalist id="playerslist">
						<option value="0" label="Любое число">Любое число</option>
						<option value="1" label="1">1</option>
						<option value="2" label="2">2</option>
						<option value="3" label="3">3</option>
						<option value="4" label="4">4</option>
						<option value="5" label="5">5</option>
						<option value="6" label="6">6</option>
						<option value="7" label="Более">Более</option>
					</datalist>
				</div>
				<div>
					<label htmlFor="old">Возраст</label>
					<input id="old" name="old" min="0" max="18" list="oldlist" type="range"/>
					<datalist id="oldlist">
						<option value="0" label="Любой возраст">Любой возраст</option>
						<option value="9" label="9+">9+</option>
						<option value="18" label="18+">18+</option>
					</datalist>
				</div>
			</div>
			
			<a href="#" className={style.more}>
				<button>Подобрать</button>
				<svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
					 xmlns="http://www.w3.org/2000/svg">
					<path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</form>
	);
};

export default Parametrs;