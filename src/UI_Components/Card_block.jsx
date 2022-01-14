import React from 'react'
import Card from './Items/Card'

export default function Card_block({items}) {
    return (
		<div className=' flex py-2 gap-2'>
			<Card
				url={
					'https://dodopizza-a.akamaihd.net/static/Img/Products/e9624d2bf1ae41598cd6635c0d3ed0f6_292x292.jpeg'
				}
				title={'Пепперони фреш'}
				ingredients={
					'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус'
				}
				availability={true}
				price={'250₽'}
			/>
		</div>
	);
}
