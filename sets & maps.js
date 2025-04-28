'use strict';

/*

//
// 3.2. Sets - множества
//

const flights = ['Russia', 'USA', 'London', 'London', 'USA'];

const setFlights = new Set(flights); // Преобразование в Set
console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has('Russia'));
setFlights.add('Paris');
setFlights.delete('London');
console.log(setFlights);

for (const flight of setFlights) {
  console.log(flight);
}

console.log([...setFlights]); // Преобразование в массив

const setObj = new Set([{ a: 1 }, { b: 2 }, { c: 3 }]);
console.log(setObj);
console.log(new Set('abcd')); // Иттерируемый обьект

//
// 3.4. Основы работы с Map
//

const weatherMap = new Map();
weatherMap
      .set('London', '21')
      .set('Moscow', '7');

console.log(weatherMap.get('Moscow')); // 7
console.log(weatherMap.get('NotFound')); //undefined

console.log(weatherMap.has('Moscow'));
console.log(weatherMap.has('NotFound'));
console.log(weatherMap.delete('London'));

const arr = [1, 2, 3];

weatherMap
      .set(1, 5)
      .set(true, 'yes')
      .set(false, 0)
      .set(arr, 'array')
      .set({ a : 1 }, { b: 2 })


console.log(weatherMap);
console.log(weatherMap.size); // 6

console.log(weatherMap.get(arr)); // array
console.log(weatherMap.get({ a: 1 })); // undefined

//
// 3.5. Быстрое создание Map
//

const weatherMap = new Map([
  ['London', '10'],
  ['Moscow', '7']
]);

console.log(weatherMap);

const weatherObject = {
  london: 10,
  moscow: 7,
  paris: 12
};

console.log(Object.entries(weatherObject));
const weatherMap2 = new Map(Object.entries(weatherObject));
console.log(weatherMap2.size);

//
// 3.6. Итерация по Map
//

const weatherMap = new Map([
    ['London', 3],
    ['Moscow', 6],
    ['Paris', 12]
]);

for (const [key, value] of weatherMap) {
  console.log(key);
  console.log(value);
};

console.log([...weatherMap]);
console.log([...weatherMap.keys()]);
console.log([...weatherMap.values()]);

//
// 3.7. Упражнение - swap ключей и значений
//

// Необходимо поменять местами ключи и значения

let weatherMap = new Map([
  ['London', 10],
  ['Moscow', 7],
  ['Paris', 14]
]);

console.log(weatherMap);

const swapWeatherMap = new Map();
for (const [key, value] of weatherMap) {
  swapWeatherMap.set(value, key);
};

console.log(swapWeatherMap);

// Решение Антона Ларичева

const swapWeatherMap2 = new Map([...weatherMap].map(el => el.reverse()));
console.log(swapWeatherMap2);

//
// 3.8. WeakMap - слабый мап, который очищается при потере обьекта
//

let a = { a: 1 };
let b = { b: 2 };
const map = new WeakMap();
map.set(a, 'testA');
map.set(b, 'testB');
console.log(map.get(a));
console.log(map.has(a));
console.log(map);

a = null;
setTimeout(() => {
  console.log(map);
}, 1000)

// Частое применение - в кеше
let cache = new WeakMap();

function getValue(obj) {
    if (!cache.has(obj)) {
      const res = 2389 + 83429 * 32423; //  Сложные вычисления
      cache.set(obj, res);
    }
    return cache.get(obj);
}

const res = getValue(b);
console.log(res);
const res2 = getValue(b);

//
// 3.9. WeakSet
// 

let a = { a: 1 };
let b = { b: 2 };

const set = new WeakSet([a, b]);
console.log(set);
a = null;

setTimeout(() => {
  console.log(set);
}, 1000);

//
// 4.3. Округление
//

// До целого
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.6)); // 1
console.log(Math.round(1.499999999)); // 1

// До потолка
console.log(Math.ceil(1.4)); // 2
console.log(Math.ceil(1)); // 0
console.log(Math.ceil(0.1)); // 1

// До пола
console.log(Math.floor(0.1)); // 0
console.log(Math.floor(2.9)); // 2

// Отсекает кроме целого
console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(1.4)); // 1
console.log(Math.trunc(1.11111)); // 1

console.log(1.49999.toFixed(1)); // 1.5 - но это строка
console.log(Number(1.49999.toFixed(1))); // 1.5 - в число

//
// 4.4. Упражнение - Функция случайного числа
//

function getRandomNumbers(max, min) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumbers(2, 9));

//
// 4.5. Оператор остатка от деления
//

console.log(15 / 2); // Деление
console.log(15 % 2); // 14 / 2 + 1 = 15
console.log(12 % 2); // 12 / 2 + 0 = 12

const isEven = n => n % 2 === 0; // Проверка на четное
const isOdd = n => n % 2 === 0; // Проверка на нечетное

function isEvenFunc(n) {
	return n % 2 === 0;
}

console.log(isEven(17)); // false
console.log(isEven(12)); // true
console.log(isOdd(17)); // false
console.log(isOdd(12)); // true

//
// 4.6. Разделитель чисел
//

const bigNum = 350_500_000;
const bigNum2 = 350500000;

console.log(Number('350_000_000')); // NaN
console.log(Number('350000000')); // 350000000
console.log(Number.parseInt('350_000_000')); // 350 - неккоректно
console.log(Number.parseFloat('350_000_000')); // 350 - неккоректно

*/