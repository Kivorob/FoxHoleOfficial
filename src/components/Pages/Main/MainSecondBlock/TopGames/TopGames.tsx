import React from 'react';
import style from './TopGames.module.scss';
import Name from "../../Items/Name/Name";
import TopLine from "./TopLine/TopLine";


const TopGames = (props: any) => {
	let data = [
		{
			name:"broo",
			cost:"1200",
			image:"",
			id:"1"
		},
		{
			name:"aLorem ipsum dolor sit amet, consectetur.	",
			cost:"1200",
			image:"",
			id:"2"
		},
		{
			name:"aLorem ipsum dolor sit amet, consectetur.	",
			cost:"1200",
			image:"",
			id:"2"
		},
		{
			name:"aLorem ipsum dolor sit amet, consectetur.	",
			cost:"1200",
			image:"",
			id:"2"
		},
		{
			name:"aLorem ipsum dolor sit amet, consectetur.	",
			cost:"1200",
			image:"",
			id:"2"
		},
		{
			name:"aLorem ipsum dolor sit amet, consectetur.	",
			cost:"1200",
			image:"",
			id:"2"
		},
		{
			name:"aLorem ipsum dolor sit amet, consectetur.	",
			cost:"1200",
			image:"",
			id:"2"
		},
		{
			name:"aLorem ipsum dolor sit amet, consectetur.	",
			cost:"1200",
			image:"",
			id:"2"
		}
	]
	return (
		<section className={style.container}>
			<Name title="Народный топ"/>
			{data.map(item => <TopLine name={item.name} cost={item.cost} image={item.image}/>)}
		</section>
	);
}

export default TopGames;