// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.

let product1 = prompt('Введите наименнование продукта 1: '); // Название товара 1
let price1 = prompt('Введите стоимость продукта 1: '); // Стоимость товара  1
let count1 = prompt('Введите кол-во продукта 1: ');
let sum1 = price1 * count1;

console.log(product1, sum1); // Вывод в консоль

let product2 = prompt('Введите наименнование продукта 2: ');
let price2 = prompt('Введите стоимость продукта 2: ');
let count2 = prompt('Введите кол-во продукта 2: ');
let sum2 = price2 * count2;

console.log(product2, sum2); // Вывод в консоль

let product3 = prompt('Введите наименнование продукта 3: ');
let price3 = prompt('Введите стоимость продукта 3: ');
let count3 = prompt('Введите кол-во продукта 3: ');
let sum3 = price3 * count3;

console.log(product3, sum3); // Вывод в консоль

console.log(`Сумма всей покупки: ${sum1 + sum2 + sum3}`);

// или

let totalSum = sum1 + sum2 + sum3;

console.log(`Сумма всей покупки: ${totalSum}`);
