import React from 'react';
import style from "./InfoBar.module.scss"

const InfoBar = () => {
	return (
		<section className={style.container}>
			<div className={style.infoBar}>
				<div className={style.infoHRefs}>
					<p>ДОСТАВКА И ОПЛАТА</p>
					<a href="/">Способы оплаты</a>
					<a href="/">Службы доставки</a>
					<a href="/">Адрес магазина</a>
				</div>
				<div className={style.infoHRefs}>
					<p>ПОКУПАТЕЛЯМ</p>
					<a href="/">Подобрать игру</a>
					<a href="/">Бонусная программа</a>
					<a href="/">Информация о заказе</a>
					<a href="/">Возврат товара</a>
					<a href="/">Помощь с правилами</a>
					<a href="/">Юридическим лицам</a>
					<a href="/">Архивные игры</a>
				</div>
				<div className={style.infoHRefs}>
					<p>FOX HOLE</p>
					<a href="/">О магазине</a>
					<a href="/">Франчайзинг</a>
					<a href="/">Игры оптом</a>
					<a href="/">Работа у нас</a>
					<a href="/">Новости</a>
					<a href="/">Контакты</a>
				</div>
				<div className={style.infoHRefs}>
					<p>НАШИ ПРОЕКТЫ</p>
					<a href="/">Fox Hole</a>
					<a href="/">Igrokon</a>
					<a href="/">Warforge</a>
					<a href="/">Мир Фантастики</a>
					<a href="/">Берсерк</a>
					<a href="/">Fallout 76</a>
				</div>
			</div>
		</section>
	);
};

export default InfoBar;