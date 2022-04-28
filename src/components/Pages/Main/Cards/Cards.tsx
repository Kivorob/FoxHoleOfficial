import React from 'react';
import style from './Cards.module.scss';
import Card from "./Card/Card";


const Cards = () => {
	let data = [
		{
			title: "АМОГУС",
			description: "дадададададдада нет нет да",
			cost: "990",
			countplayers: "3",
			old: "16"
		},
		{
			title: "АМОГУС",
			description: "дадададададдада нет нет да",
			cost: "990",
			countplayers: "3",
			old: "16"
		},
		{
			title: "АМОГУС",
			description: "дадададададдада нет нет да",
			cost: "990",
			countplayers: "3",
			old: "16"
		},
		{
			title: "АМОГУС",
			description: "дадададададдада нет нет да",
			cost: "990",
			countplayers: "3",
			old: "16"
		},
		{
			title: "АМОГУС",
			description: "дадададададдада нет нет да",
			cost: "990",
			countplayers: "3",
			old: "16"
		},
		{
			title: "АМОГУС",
			description: "дадададададдада нет нет да",
			cost: "990",
			countplayers: "3",
			old: "16"
		},
		{
			title: "АМОГУС",
			description: "дадададададдада нет нет да",
			cost: "990",
			countplayers: "3",
			old: "16"
		},
		{
			title: "АМОГУС",
			description: "дaskfniueда нет нет да",
			cost: "590",
			countplayers: "6",
			old: "18"
		},
	]
	return (
		<div className={style.container}>
			{data.map(item => <Card title={item.title} description={item.description} cost={item.cost} countplayers={item.countplayers} old={item.old}/>)}
		</div>
	);
};

export default Cards;