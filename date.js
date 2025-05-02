'use strict';

/*

//
// 5.1. Создание дат
//

const now = new Date();
console.log(now);

console.log(new Date('02-01-2023'));
console.log(new Date('02/01/2023'));

//
// 5.2. Операции с датами
//

const date1 = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);

console.log(Number(date1));
console.log(date2 - date1);

function getDaysBetweenDate(dateFirst, dateSecond) {
	return (date2 - date1) / (1000 * 60 * 60 * 24);
}

console.log(getDaysBetweenDate(date2, date1));

//
// 5.3. Сравнение дат
//

const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 4);

console.log(first < second);
console.log(first == second);
console.log(first === second);

console.log(first.getTime() == second.getTime());
console.log(first.getTime() === second.getTime());
console.log(Number(first) === Number(second));

//
// 5.4. Упражнение - Проверка на день рождения
//

const user = {
	name: 'Vasya',
	birtday: '04/29/2025'
};

const user2 = {
	name: 'Petua',
	birtday: '12/29/2023'
};

function isBirthday(userObj) {
	const currentDate = new Date();
	const userDate = new Date(userObj.birtday);

	// console.log(currentDate.getDate());
	// console.log(userDate.getDate());

	return currentDate.getMonth() === userDate.getMonth() ? 
	currentDate.getDay() === userDate.getDay() ? true : false : false;
};

console.log(isBirthday(user));
console.log(isBirthday(user2));

//
// 5.5. Интернационализация дат
//

const date = new Date();
console.log(date);
console.log(new Intl.DateTimeFormat('ru-RU').format(date));
console.log('------------------------------------------');

const option1 = {
	hour: 'numeric',
	minute: 'numeric',
};
console.log(new Intl.DateTimeFormat('ru-RU', option1).format(date));
console.log('------------------------------------------');

const option2 = {
	hour: 'numeric',
	minute: 'numeric',
	month: 'long',
	weekday: 'short',
	year: '2-digit'
}
console.log(new Intl.DateTimeFormat('ru-RU', option2).format(date));
console.log(new Intl.DateTimeFormat('en-US', option2).format(date));
console.log('------------------------------------------');

console.log(navigator.language); // можно использовать заместо ru-RU
console.log(new Intl.DateTimeFormat(navigator.language, option2).format(date));

*/