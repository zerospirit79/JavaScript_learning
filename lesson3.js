"use strict";

/*С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

let num = 0,
    string = '- это ноль';
console.log(num + string);
for (let i = 1; i <= 10; i++) {
    num = i % 2
    if (num == 0) {
        console.log(i + ' - четное число');
    } else {
        console.log(i + ' - нечетное число');
    }
}


//3. Выведите в консоль значения, указанные рядом с комментариями:
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
//15%, можете использовать метод forEach

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
]
products.forEach(Element => {
    Element.price = Element.price - (Element.price * 0.15);

    console.log(Element.price);
});

//Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
//1. Получить все товары, у которых есть фотографии, можете использовать метод filter
//2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
// , как устроен sort можно посмотреть например здесь 

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const anotherProduct = products.filter(photos => "photos" in photos &&  photos.photos.length > 0 );
console.log(anotherProduct);

products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;

});
console.log(products);

//6/ Вывести с помощью цикла for числа от 0 до 9,НЕ используя тело цикла.

for (let i = 0; i < 9; i++, console.log(i)) {}

//7. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке

let arr = [];
let i = 0;
while (i < 20) {
    i++;
    arr.push('x');
    console.log(arr);

}