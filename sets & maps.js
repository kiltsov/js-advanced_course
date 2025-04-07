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

*/