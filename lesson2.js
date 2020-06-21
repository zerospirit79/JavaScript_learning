"use strict";

//1. Дан код:
var a = 1,
    b = 1,
    c, d;
c = ++a;
console.log("c = " + c); // 2 выведется 2, с = 1+1, переменная а примет значение 2
d = b++;
console.log("d = " + d); // 1 выведется 1, b++ сумморование произойдет после выполнения функции, b примет значение 2
c = (2 + ++a);
console.log("c = " + c); // 5 выведется 5 с=2 + 3, переменная а примет значение 3
d = (2 + b++);
console.log("d = " + d); // 4 выведется 4, b примет значение 3
console.log("a = " + a); // 3 увеличение происходит в строках 7 и 11
console.log("b = " + b); // 3 увеличение происходит в строках 9 и 13
//Почему код даёт именно такие результаты?

//2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); // a принимает значение 4, x принимаает значение 5
console.log('x= ' + x);
console.log('a= ' + a); 

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. ###
// 1 вариант
var a = 10,
  b = -7,
  x;
if (a >= 0) {
  if (b >= 0) {
    x = a - b;
  } else {
    x = a + b;
  }
} else {
  if (b >= 0) {
    x = a + b;
  } else {
    x = a * b;
  }
}
console.log("x = " + x);
// 2 вариант
var a = 10,
  b = 7,
  x;
if (a >= 0 && b >= 0) {
  x = a - b;
} else if (a < 0 && b >= 0) {
  x = a + b;
} else if (a >= 0 && b < 0) {
  x = a + b;
} else {
  x = a * b;
}
console.log("x = " + x);

// 4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15. ###
const a = parseInt(Math.random() * 15);
switch (a) {
  case 0:
    console.log("0");
    break;
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  case 4:
    console.log("4");
    break;
  case 5:
    console.log("5");
    break;
  case 6:
    console.log("6");
    break;
  case 7:
    console.log("7");
    break;
  case 8:
    console.log("8");
    break;
  case 9:
    console.log("9");
    break;
  case 10:
    console.log("10");
    break;
  case 11:
    console.log("11");
    break;
  case 12:
    console.log("12");
    break;
  case 13:
    console.log("13");
    break;
  case 14:
    console.log("14");
    break;
  case 15:
    console.log("15");
    break;
}

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return. ###
var a = 4,
  b = 14;
function summ(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function devide(a, b) {
  return a / b;
}

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3)
// и вернуть полученное значение (использовать switch). ###
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "summ":
      return arg1 + arg2;
      break;
    case "substract":
      return arg1 - arg2;
      break;
    case "multiply":
      return arg1 * arg2;
      break;
    case "devide":
      return arg1 / arg2;
      break;
    default:
            throw new Error("Операция " + operation + " не предусмотрена");
  }
}
mathOperation(10, 15, "multiply");
mathOperation(15, 15, "summ");
mathOperation(13, 25, "substract");
mathOperation(10, 5, "devide");
mathOperation(3, 5, "вычисление");

// 7. *Сравнить null и 0. Попробуйте объяснить результат. ###
/*null - это тип данных означающее что значение неизвестно,
0 - это тип данных Number.
null > 0 - false 
null == 0 - false
null >= 0 - true
null <= 0 - true*/


// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.
function power(val, pow) {
    if (pow != 1) {
        return val * power(val, pow - 1);
    } else if (pow <= 0) {
        alert("Введите число большее или равное 1");
    } else {
        return val;
    }
}
console.log(power(2,3));
/*6**. (Сложное задание, требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
числа
*/
/**
 * Функция возвращает верный падеж для слова "рубль", в зависимости
 * от переданного числа.
 * @param {number} num количество рублей в виде числа.
 * @returns {string} слово "рубль" в правильном падеже.
 */
function getCase(num) {
    let beforeLastDigit = getDigitBeforeLastDigit(num);
    if (beforeLastDigit == 1) {
        return "рублей";
    }
    num = String(num);
    let lastNumber = Number(num.charAt(num.length - 1));
    switch (lastNumber) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return "рублей";
        case 1:
            return "рубль";
        case 2:
        case 3:
        case 4:
            return "рубля";
    }
}

/**
 * Функция возвращает предпоследнюю цифру числа, если она есть, иначе null.
 * @param {number} num 
 * @returns {(number|null)}
 */
function getDigitBeforeLastDigit(num) {
    num = String(num);
    let digit = num.charAt(num.length - 2);
    if (digit !== "") {
        return Number(digit);
    }
    return null;
}


let money = parseInt(prompt('Сколько денег вы хотите положить?'));
alert('Ваша сумма ${money} ${getCase(money)} успешно зачислена.');