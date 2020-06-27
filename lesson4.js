"use strict";

/*1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)*/
let number = prompt('Введите число от 0 до 999 для разделения на разряды');

/**
 * Функция разбивает число по разрядам и возвращает объект с записанными разрядами числа.
 * @param {int} num Число в диапазоне [0, 999], которое разобьется на разряды.
 * @returns {Object} Объект с разрядами числа или пустой объект в случае ошибки.
 */
function splitDigitNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Значение числа должно быть от 0 до 999');
        return {};
    }
    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundereds: Math.floor(num / 100),
    };
}
console.log(splitDigitNumber(number));


/*1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.*/
//es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 25 / 100);
}

const product1 = new Product('Goods1', 300);
product1.make25PercentDiscount();

console.log(product1);

//es6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100);
    }
}
const product1 = new Product('Goods1', 300);
product1.make25PercentDiscount();

console.log(product1);
/*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства
объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать
его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также
в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
свойству highlighted значение true.*/
//es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (text) {
    this.text = text;
}

const post1 = new Post('Pavel', 'My own text', new Date());
console.log(post1);
post1.edit('My new text');
console.log(post1);

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const attachedOne = new AttachedPost('Admin', "Admin\'s new text", new Date());
console.log(attachedOne);
attachedOne.makeTextHighlighted();
attachedOne.edit("Admin\'s another text");
console.log(attachedOne);
//es6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post1 = new Post('Pavel', 'My own text', new Date());
console.log(post1);
post1.edit('My new text');
console.log(post1);

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attachedOne = new AttachedPost('Admin', "Admin\'s new text", new Date());
console.log(attachedOne);
attachedOne.makeTextHighlighted();
attachedOne.edit("Admin\'s another text");
console.log(attachedOne);