'use scrict';

/*

//
// 7.3. Оператор new
//

const User = function(email, password) {
	this.email = email;
	this.password = password;
};

const user1 = new User('a@a.ru', '123');
console.log(user1);

const user2 = new User('asdf@a.ru', '12sdf3');
console.log(user2);

console.log(user2 instanceof User); // Проверка на инстанс

//
// 7.4. Prototype
//

const Book = function(title, autor) {
	this.autor = autor;
	this.title = title;
	this.isRead = false;
}

Book.prototype.read = function() {
	this.isRead = true;
}

Book.prototype.cover = 'Paper';

const lordOftheRings = new Book('Lord of the Ring', 'Tolkien');
lordOftheRings.read();
console.log(lordOftheRings);
console.log(lordOftheRings.cover);
console.log(lordOftheRings.hasOwnProperty('cover')); // false
console.log(lordOftheRings.hasOwnProperty('autor')); // true

console.log(lordOftheRings.__proto__);
console.log(lordOftheRings.__proto__ === Book.prototype);
console.log(Book.prototype.isPrototypeOf(lordOftheRings)); // true
console.log(Book.prototype.isPrototypeOf(Book)); // false

//
// 7.5. Упражнение - Корзина товаров
//

const product1 = {id: 1, name: 'Bread', count: 1}
const product2 = {id: 2, name: 'Milk', count: 1}

const Product = function(product) {
	this.id = product.id;
	this.name = product.name;
	this.count = product.count;
}

const Basket = function(product) {
	this.products = [];
}

Basket.prototype.addProduct = function(product) {
	if (this.products.find(product => product.id == product.id)) {
		return;
	}
	this.products.push(product);
}

Basket.prototype.increaseAmount = function(id) {
	this.products = this.products.map(product => {
		if (product.id == id) {
			product.count++;
			return product;
		}
		return product;
	})
}

Basket.prototype.decreaseAmount = function(id) {
	this.products = this.products
	.map(product => {
		if (product.id == id) {
			product.count--;
			return product;
		}
		return product;
	})
	.filter(product => product.count > 0);
}

const basket1 = new Basket();
basket1.addProduct(product1);
basket1.increaseAmount(1);
basket1.decreaseAmount(1);
basket1.decreaseAmount(1);
console.log(basket1);

const basket2 = new Basket();
basket2.addProduct(product2);
console.log(basket2);

//
// 7.6. Цепочки prototype
//

*/