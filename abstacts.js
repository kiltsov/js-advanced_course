'use strict';

/*

//
// 9.1. Абстракция и инкапсуляция
//

class Film {
  #name;
  #author;
  rating;
  #length;

  constructor(name, author, length) {
    this.#name = name;
    this.#author = author;
    this.#length = length;
  }

  get author() {
    return this.#author;
  }

  get length() {
    return this.#length;
  }
}

const avatarFirm = new Film('Avatar', 'Cameron', 240);
console.log(avatarFirm);

//
// 9.2. Наследование
//

const Book = function(title, author) {
	this.title = title;
	this.author = author;
}

Book.prototype.buy = function() {
	console.log('Buy');
}

const AudioBook = function(title, author, lenMin) {
	Book.call(this, title, author);
	this.lenMin = lenMin;
}

AudioBook.prototype = Object.create(Book.prototype);
AudioBook.prototype.constructor = AudioBook;
AudioBook.prototype.log = function() {
	console.log(`${this.title} - ${this.lenMin}`);
}

const book = new AudioBook('Lord of The Rings', 'Tolkien', 20 * 60);
book.log();
book.buy();
console.log(book);

console.log(book instanceof AudioBook);
console.log(book instanceof Book);

//
// 9.3. Наследование в ES6
//

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  buy() {
    console.log('Buy');
  }
}

class AudioBook extends Book {
  constructor(title, author, lenMin) {
    super(title, author);
    this.lenMin = lenMin;
  }

  log() {
    console.log(`${this.title} - ${this.lenMin}`);
  }
}

const book = new AudioBook('Lord of The Rings', 'Tolkien', 20 * 60);
book.log();
book.buy();

//
// 9.5. Упражнение - Удар по орку
//

class Enemy {
  health;
  constructor(health) {
    this.health = health;
  }

  recieveDamage(damage) {
    this.health = this.health - damage;
    console.log(this.health);
  }
}

class Sword {
  #damage;
  constructor(damage) {
    this.#damage = damage;
  }
  strike(enemy) {
    enemy.recieveDamage(this.#damage);
  }
}

class Orc extends Enemy {
  constructor(health) {
    super(health);
  }

  recieveDamage(damage) {
    if(Math.random() > 0.5) {
      this.health = this.health - damage;
    }
    console.log(this.health);
  }
}

const enemy = new Orc(10);
const sword = new Sword(3);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);

//
// 9.7. Паттерн Builder и chaining
//

class Wallet {
  balance = 0;

  add(sum) {
    this.balance += sum;
    return this;
  }

  remove(sum) {
    this.balance -= sum;
    return this;
  }
}

const wallet = new Wallet();
const res = wallet
    .add(100)
    .remove(30)
    .add(10);
console.log(res);

*/