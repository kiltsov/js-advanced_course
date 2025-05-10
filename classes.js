'use strict';

/*

//
// 8.1. Классы
//

// Предыдущая реализация
const Book = function (title, autor) {
  this.autor = autor;
  this.title = title;
  this.isRead = false;
};

Book.prototype.read = function () {
  this.isRead = true;
};

// На Классах
class BookClass {
  isRead = false;

  constructor(title, autor) {
    this.autor = autor;
    this.title = title;
  }

  read() {
    this.isRead = true;
  }
}

const lotr = new BookClass('lotr', 'Tolkien');
console.log(lotr);
console.log(lotr instanceof BookClass);

lotr.read();
console.log(lotr.__proto__);

//
// 8.2. Setters и getters
//

const task = {
	title: 'Task1',
	dueTo: new Date('2023/01/01'),

	get isOverdue() {
		return this.dueTo < new Date();
	},

	set isOverdue(isOverdueTask) {
		if (!isOverdueTask) {
			this.dueTo = new Date();
		}
	}
}

console.log(task.isOverdue);
task.isOverdue = false;
console.log(task);

class Task {
	constructor(title, dueDate) {
		this.title = title;
		this.dueDate = dueDate;
	}

	get isOverdue() {
		return this.dueTo < new Date();
	}

	set dueDate(date) {
		if (date < new Date()) {
			return;
		}
		this._dueDate = date;
	}
}

const newTask = new Task('Task2', new Date());
console.log(newTask.isOverdue);
console.log(newTask._dueDate);

//
// 8.3. Static
//

class Test {
	static a = 1;
	static hello() {
		console.log('Hello!');
	}

	static {
		let b = 5;
		this.a = 7;
	}
}

Test.hello();
console.log(Test.a);

//
// 8.4. Приватные методы и свойства
//

class Car {
	#vin;

	constructor() {
		this.test = 3;
	}

	#changeVin() {
		console.log('changed');
	}

	test() {
		// Какая то проверка
		this.#changeVin();
	}

	static #field = 3;

	static {
		this.#field = 5;
	}
}

*/

//
// 8.5. Упражнение - класс пользователя
//

class User {

	#password;

	constructor(login, password) {
		this.login = login;
		this.#password = this.#reversePassword(password);
	}

	#reversePassword(password) {
		return password.split('').reverse().join();
	}

	changePassword(oldPassword, newPassword) {
		if (!this.#checkPassword(oldPassword)) {
			console.log('Пароли не совпадают!');
			return false;
		}
		this.#password = this.#reversePassword(newPassword);
		console.log('Пароль успешно изменен!');
		return true;
	}

	#checkPassword(oldPassword) {
		return this.#reversePassword(oldPassword) === this.#password;
	}
}

const user_1 = new User('anton', '32484');
user_1.changePassword('0000', '0348');
user_1.changePassword('32484', '033248748');
console.log(user_1);

class UserByAnton {
	#login;
	#_password;

	constructor(login, password) {
		this.#login = login;
		this.#password = password;
	}

	set #password(password) {
		this.#_password = password.split('').reverse('').join('');
	}

	get #password() {
		return this.#_password.split('').reverse('').join('');
	}

	get login() {
		return this.#login;
	}

	checkPassword(password) {
		return this.#password === password;
	}

	changePassword(oldPassword, newPassword) {
		if (!this.checkPassword(oldPassword)) {
			return false;
		}
		this.#password = newPassword;
		return true;
	}
}

const user_2 = new UserByAnton('a@a.tu', 'dfhjkha');
console.log(user_2.checkPassword('234'));
console.log(user_2.checkPassword('dfhjkha'));
console.log(user_2.changePassword('dfhjkha', '123'));
