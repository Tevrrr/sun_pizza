import React from 'react'

export default function Contact({ address, time, url}) {
	return (
		<div className=' mb-2 p-2 max-w-2xl w-full gap-2 flex justify-between'>
			<img className=' h-full rounded-xl' src={url} alt={address} />
			<div>
				<h2>{address}</h2>
				<br />
				<h3>Доставка и самовывоз</h3>
				<p>{time[0]}</p>
				<br />
				<h3>Ресторан</h3>
				<p>{time[1]}</p>
			</div>
		</div>
	);
}
