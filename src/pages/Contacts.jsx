import React from 'react'
import Contact from '../UI_Components/Items/Contact'
// http://mmaps.net/st/st11p01.png
export default function Contacts({city}) {
    return (
		<div className=' p-2 flex flex-col items-center'>
			<h1 className=' font-bold text-3xl text-center'>{city}</h1>
			<br />
			<Contact
				url={'http://mmaps.net/st/st11p01.png'}
				address={'ул. Краснодарская, 2В'}
				time={['09:00 — 01:00', '09:00 — 23:00']}
			/>
			<Contact
				url={'http://mmaps.net/st/st11p01.png'}
				address={'ул. Краснодарская, 2В'}
				time={['09:00 — 01:00', '09:00 — 23:00']}
			/>
			<Contact
				url={'http://mmaps.net/st/st11p01.png'}
				address={'ул. Краснодарская, 2В'}
				time={['09:00 — 01:00', '09:00 — 23:00']}
			/>
			<Contact
				url={'http://mmaps.net/st/st11p01.png'}
				address={'ул. Краснодарская, 2В'}
				time={['09:00 — 01:00', '09:00 — 23:00']}
			/>
		</div>
	);
}
