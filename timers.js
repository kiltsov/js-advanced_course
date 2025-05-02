'use strict';

/*

//
// 6.1. Создание таймеров
//

console.log(1);

const messages = ['Bash!', 'Boom!']

const boomTimer = setTimeout((message1, message2) => {
	console.log(2);
	console.log(message1);
	console.log(message2);
}, 1000, ...messages);

// clearTimeout(boomTimer);

console.log(3);

//
// 6.4. Работа с интервалами
//

const interval = setInterval(() => {
	console.log(new Date());
}, 1000);

const timer = setTimeout(() => {
	clearInterval(interval);
}, 5000);

console.log(interval);
console.log(timer);

*/

//
// 6.5. Упражнение - Таймер пиццы
//

function pizzaTimer(ms) {
	const end = new Date().getTime() + ms;
	const interval = setInterval(() => {
		console.log(
			new Intl.DateTimeFormat('ru-RU', {
				minute: 'numeric',
				second: 'numeric',
			}).format(end + 100 - new Date()) // Добавляем небольшое значение 100
		);
	}, 1000);
	setTimeout(() => {
		clearInterval(interval);
		console.log('Пицца готова 🍕 !!!')
	}, ms)
}

pizzaTimer(5000);