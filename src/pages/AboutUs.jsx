/** @format */

import React from 'react';
import InformationCard from '../UI_Components/Items/InformationCard';


export default function AboutUs() {
	return (
		<div className=' AboutUs flex-col max-w-[1200px] mx-auto p-4'>
			<h1>Мы</h1>
			<p>
				Обычно люди приходят в SunPizza, чтобы просто поесть. Наши
				промоутеры раздают листовки про кусочек пиццы за двадцать рублей
				или ещё что-то выгодное. Мы делаем это как первый шаг, чтобы
				познакомиться.
			</p>
			<p>
				Но для нас Додо — не только пицца. Это и пицца тоже, но в первую
				очередь это большое дело, которое вдохновляет нас, заставляет
				каждое утро просыпаться и с интересом продолжать работу.
			</p>
			<p>В чём же наш интерес? Сейчас расскажем.</p>
			<h2>Идеальные ингредиенты</h2>
			<p>
				Почему мы так хотим познакомиться? Потому что дальше пицца
				делает всё сама. Люди видят, что она вкусная, и возвращаются
				снова. Нам главное первый раз это показать.
			</p>
			<p>
				Вообще пицца — очень простая штука, её сложно испортить.
				Достаточно хороших ингредиентов и правильного теста. Это
				конструктор, если детали качественные, то и результат будет в
				порядке. Вот они, наши детали:
			</p>
			<div className=' flex justify-around  max-w-4xl gap-4 flex-wrap'>
				<InformationCard
					title={'Тесто'}
					text={
						'Самая тонкая вещь. Главное - сделать его «живым». Это целый квест из граммов, градусов, процентов и часов с минутами. Процесс непростой, но у нас получается!'
					}
				/>
				<InformationCard
					title={'Моцарелла'}
					text={
						'Сыр в пицце - ключевой ингредиент. Мы используем настоящую моцареллу от российских поставщиков. Сыр должен тянуться, как на картинке.'
					}
				/>
				<InformationCard
					title={'Начинка'}
					text={
						'Есть два главных правила вкусной начинки: не экономить на начинке; фанатично соблюдать режим хранения. Это и весь секрет.'
					}
				/>
				<InformationCard
					title={'Томатный соус'}
					text={
						'Главное, что нужно знать про хороший томатный соус: он должен быть сделан из томатов. Звучит логично, но задумайтесь!'
					}
				/>
			</div>
		</div>
	);
}
