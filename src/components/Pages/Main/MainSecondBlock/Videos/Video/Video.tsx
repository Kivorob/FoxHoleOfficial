import React from 'react';
import style from './Video.module.scss';


const Video = (props: any) => {
	return (
		<div className={style.container}>
			<iframe width="220" height="120" src={props.url}
					title="YouTube video player" frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen>
			</iframe>
			<p>Опубликовано: {props.date}</p>
			<p>{props.title}</p>
		</div>
	);
};

export default Video;