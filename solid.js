'use strict';

/*

//
// 10.2. Принцип единой ответственности
//

// Каждый класс должен иметь только одну причину для изменения.
// Класс выполняет одно действие, связанное только с его областью.

//
// 10.3. Принцип открытости и закрытости
//

// Класс должен быть открыт для расширения, но закрыт для модификации.
// Это означает, что можно добавлять новое поведение без изменения существующего кода.

class Treasure {
  value = 0;
}

class Coin extends Treasure {
    value = 1;
}

class Crystal extends Treasure {
    value = 10;
}

class Brilliant extends Treasure {
    value = 20;
}

class Inventory {
  #score;
  pick(treasure) {
    this.#score += treasure.value;
  }
}

//
// 10.4. Принцип подстановки Барбары Лисков
//

// Принцип Барбары Лисков (LSP - Liskov Substitution Principle) указывает на то, 
// что объекты класса-потомка должны быть способны заменять объекты базового класса 
// без нарушения работоспособности программы.

class User {
  #role = 'user';

  getRole() {
    return this.#role;
  }
}

class Admin extends User {
  #role = ['user', 'admin'];

  getRole() {
    return this.#role.join(', ');
  }
}

function logRole(user) {
	console.log('Role: ' + user.getRole().toUpperCase());
}

logRole(new User());
logRole(new Admin());

//
// 10.5. Принцип разделения интерфейса
//

// Объяснить важность разделения интерфейса и как это помогает избежать 
// ненужной зависимости классов от интерфейсов, содержащих методы, которые им не требуются.

//
// 10.6. Принцип инверсии зависимостей
//

// Модули высокого уровня не должны зависеть от модулей низкого уровня. Оба модуля должны зависеть от абстракций.

class DB {
  save(items) {
    console.log(`Saved ${items}`);
  }
}

class MongoDB extends DB {
  save(items) {
    console.log(`Saved to Mongo ${items}`);
  }
}

class ToDoTist {
  items = [1, 2, 3];
  db;

  constructor(db) {
    this.db = db;
  }

  saveToDb() {
    this.db.save(this.items);
  }
}

const list1 = new ToDoTist(new DB());
list1.saveToDb();
const list2 = new ToDoTist(new MongoDB());
list2.saveToDb();

*/