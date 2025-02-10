const currentYear = new Date().getFullYear(); //Текущий год
let index = 0; // Индекс пользователя

// Данные ввода превого пользователя.
let userName1 = prompt('Введите имя первого пользователя: ');
let userYearBirth1 = +prompt('Введите год рождения первого пользователя: ');
let userCurrentAge1 = currentYear - userYearBirth1;
index++;
console.log(`${index} ${userName1}, ${userCurrentAge1}`);

// Данные ввода второго пользователя.
let userName2 = prompt('Введите имя второго пользователя: ');
let userYearBirth2 = +prompt('Введите год рождения второго пользователя: ');
let userCurrentAge2 = currentYear - userYearBirth2;
index++;
console.log(`${index} ${userName2}, ${userCurrentAge2}`);

// Данные ввода третьего пользователя.
let userName3 = prompt('Введите имя третьего пользователя: ');
let userYearBirth3 = +prompt('Введите год рождения третьего пользователя: ');
let userCurrentAge3 = currentYear - userYearBirth3;
index++;
console.log(`${index} ${userName3}, ${userCurrentAge3}`);

// Расчет и вывод  среднего возраста
console.log(
    `Средний возраст пользователей: ${
        (userCurrentAge1 + userCurrentAge2 + userCurrentAge3) / index
    }`
);
