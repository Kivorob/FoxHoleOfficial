import React from 'react';
import style from './Catalog.module.scss';
import Card from "../../Templates/Card/Card";


const Catalog = (props: any) => {
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
		}
	]
	
	return (
		<main className={style.container}>
			<div className={style.content}>
				<p className={style.title}>{props.title}</p>
				<div className={style.desc}>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea eius eos est et fugiat, illum molestias nihil praesentium, qui quos repudiandae ut vel? Adipisci eos et explicabo impedit nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cumque explicabo fuga fugiat iusto magnam minima, modi quae sapiente. Asperiores error minus nam placeat porro repellat sed velit voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis dolor eius incidunt, iste voluptatem? Aliquid deleniti dicta eum necessitatibus nesciunt quidem velit! Magnam maiores quaerat similique! Consequuntur, nobis vero.</p>
				</div>
				<div className={style.catalog}>
					<div className={style.filter}>
					
					</div>
					<div className={style.cards}>
						{data.map(item => <Card title={item.title} description={item.description} cost={item.cost} countplayers={item.countplayers} old={item.old}/>)}
					</div>
				</div>
				<div className={style.pages}>
					<div className={style.count}>
						<p>Показывать по:</p>
						<a href="/&per_page=30">30</a>
						<a href="/&per_page=45">45</a>
						<a href="/&per_page=60">60</a>
					</div>
					<div className={style.page}>
						1/2/3
					</div>
				</div>
			</div>
		</main>
	);
};

export default Catalog;