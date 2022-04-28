import React from 'react';
import {useState, useRef, useEffect} from "react";
import debounce from "lodash.debounce"
import style from './ScrollBar.module.scss';
import ScrollItem from "./ScrollItem/ScrollItem";

export const ScrollBar = () => {
	const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
	const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
	
	const listRef = useRef<HTMLUListElement>(null);
	
	const checkForScrollPosition = () => {
		const {current} = listRef;
		if (current) {
			const {scrollLeft, scrollWidth, clientWidth} = current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
		}
	};
	
	const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

	const btnLeft = style.button + ' ' + style.buttonLeft;
	const btnRight = style.button + ' ' + style.buttonRight;
	
	const scrollContainerBy = (distance: number) =>
		listRef.current?.scrollBy({left: distance, behavior: "smooth"});
	
	
	useEffect(() => {
		const {current} = listRef;
		//block
		checkForScrollPosition();
		current?.addEventListener("scroll", debounceCheckForScrollPosition);
		//unlock
		
		return () => {
			current?.removeEventListener("scroll", debounceCheckForScrollPosition);
			debounceCheckForScrollPosition.cancel();
		};
	}, []);
	
	return (
		<div className={style.container}>
			<div className={style.scrollWrapper}>
				<button
					type="button"
					disabled={!canScrollLeft}
					onClick={() => scrollContainerBy(-300)}
					className={btnLeft}>
					<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 6L9 12L15 18" stroke="currentColor"/>
					</svg>
				</button>
				<ul className={style.list} ref={listRef}>
					<ScrollItem id="1"/>
					<ScrollItem id="1"/>
					<ScrollItem id="1"/>
					<ScrollItem id="1"/>
					<ScrollItem id="1"/>
					<ScrollItem id="1"/>
					<ScrollItem id="1"/>
				</ul>
				<button
					type="button"
					disabled={!canScrollRight}
					onClick={() => scrollContainerBy(300)}
					className={btnRight}>
					<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 6L15 12L9 18" stroke="currentColor"/>
					</svg>
				</button>
				{canScrollLeft ? (
					<div className={`${style.shadowWrapper} ${style.leftShadowWrapper}`}>
						<div className={`${style.shadow} ${style.leftShadow}`} />
					</div>
				) : null}
				{canScrollRight ? (
					<div className={`${style.shadowWrapper} ${style.rightShadowWrapper}`}>
						<div className={`${style.shadow} ${style.rightShadow}`} />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ScrollBar;