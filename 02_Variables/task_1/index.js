// Исправьте код этой программы так, что в консоль выводился результат выполнения программы, а не ошибка

const currentYear = new Date().getFullYear();

let nameStudent = 'Илья';
let yearStudent = 2006;
let ageStudent = currentYear - yearStudent;


console.log(
    `
    Студент: ${nameStudent} \n
    Год рождения: ${yearStudent} \n
    Возраст ${ageStudent}
    `
);