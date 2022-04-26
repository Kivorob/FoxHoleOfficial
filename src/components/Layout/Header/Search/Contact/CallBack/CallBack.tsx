import React from 'react';
import style from './CallBack.module.scss';


const CallBack = () => {
	return (
		<form id="CallBack" action="#" className={style.container}>
			<div className={style.title}>
				<p>Обратный звонок</p>
			</div>
			<p className={style.description}>Оставьте заявку, и наш оператор свяжется с Вами в режиме работы
				интернет-магазина: с 10:00 до 19:00 с понедельника по пятницу.</p>
			<div className={style.input}>
				<div className={style.in}>
					<p>Номер телефона</p>
					<input type="text" id="telephone" placeholder="89998887766"/>
				</div>
				<div className={style.in}>
					<p>Ваше имя</p>
					<input type="text" id="name" placeholder="Денис"/>
				</div>
			</div>
			<button className={style.btn} type="submit">Заказать звонок</button>
		</form>
	);
};

export default CallBack;