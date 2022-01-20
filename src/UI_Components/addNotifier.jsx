import React from 'react';

export default function addNotifier({ notifier, setNotifier }) {
	return (
		<div
			className={
				' fixed bottom-0 w-full flex justify-center transition-all' + notifier
			}>
			<div
				className=' bg-orange-600 p-5 rounded-md text-slate-50 text-2xl m-2 cursor-pointer '
				onClick={() => {
					setNotifier(' bottom-[-5rem]');
				}}>
				Товар успешно добавлен!
			</div>
		</div>
	);
}
