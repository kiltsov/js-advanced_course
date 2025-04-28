'use strict';

/*

//
// 4.1. Конвертация и проверка чисел
//

console.log(10 === 10.0); // true
// 0 1
console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(Number('10')); // Лучшее использование
console.log(+'20'); 

console.log(Number.parseInt('11', 10)); // 11
console.log(Number.parseInt('11 sec', 10)); // 11
console.log(Number.parseInt('sec 11', 10)); // NaN

console.log(Number.parseFloat('11.5', 10)); // 11.5
console.log(Number.parseFloat('11.5 sec', 10)); // 11.5
console.log(Number.parseFloat('sec 11.5', 10)); // NaN

console.log(Number.isNaN(Number('10sdfjk'))); // true
console.log(Number.isNaN(Number(10 / 0))); // false !! это ошибка - infinity

// Лучше использовать для проверки на число
console.log(Number.isFinite(10 / 0)); // false
console.log(Number.isFinite(Number('10sdfjk'))); // false
console.log(Number.isFinite(10)); // true

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.4)); // false

//
// 4.2. Библиотека Math
//

console.log(Math.sqrt(36)); // Квадратный корень
console.log(36 ** (1/2)); // Квадратный корень
console.log(Math.cbrt(27)); // Кубический корень
console.log(16 ** (1/4)); // Корень 4 степени

console.log(Math.sign(-100)); // Только знак числа -1
console.log(Math.sign(35)); // Только знак числа 1

console.log(Math.abs(-100)); // Без знака 100
console.log(Math.abs(100)); // Без знака 100

console.log(Math.exp(3));

console.log(Math.max(1, -2, 10, 0, 19));
console.log(Math.max(1, -2, '10', 0, true, '19'));
console.log(Math.max(1, -2, '10', 0, true, 1.2));
console.log(Math.min(1, -2, 0, 1.2));

const arr = [1, -2, 10, 0, 19];
console.log(Math.max(...arr));

console.log(Math.random());

//
// 4.8. Интернационализация чисел
//

const option1 = {
	style: 'currency',
	currency: 'RUB'
}

const option2 = {
	style: 'currency',
	currency: 'USD'
}

const option3 = {
	style: 'decimal',
}

const option4 = {
	style: 'percent',
}

const option5 = {
	style: 'unit',
	unit: 'celsius'
}

console.log(new Intl.NumberFormat('ru-RU', option1).format(23000));
console.log(new Intl.NumberFormat('en-US', option2).format(23000));
console.log(new Intl.NumberFormat('ru-RU', option3).format(10000));
console.log(new Intl.NumberFormat('ru-RU', option4).format(0.1));
console.log(new Intl.NumberFormat('ru-RU', option5).format(25));

//
// 4.9. Упражнение - Конвертер валют
//

function convert(sum, initialCurrency, convertCurrency) {
	const allCurrencies = [
		{ name: 'USD', mult: 1 },
		{ name: 'RUB', mult: 1/60 },
		{ name: 'EUR', mult: 1.1 },
	];
	const initial = allCurrencies.find(c => c.name === initialCurrency)
	if (!initial) {
		return null;
	}
	const convert = allCurrencies.find(c => c.name === convertCurrency)
	if (!convert) {
		return null;
	}
	return new Intl
		.NumberFormat('ru-RU', { style: 'currency', currency: convert.name })
		.format(sum * initial.mult / convert.mult);
}

console.log(convert(10000, 'RUB', 'USD'));
console.log(convert(10000, 'RUB', 'EUR'));
console.log(convert(100, 'USD', 'RUB'));
console.log(convert(100, 'USD', 'EUR'));
console.log(convert(100, 'EUR', 'RUB'));
console.log(convert(100, 'TG', 'RUB'));
console.log(convert(100, 'EUR', 'TG'));

console.log(isNaN('123abc'))

*/