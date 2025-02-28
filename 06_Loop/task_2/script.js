const numArray = [21, 44, 76, 30, -1, 12, -22];

// Находим все элементы в DOM.
const allElementsEl = document.querySelector('.all-elements');
const buttonMinEl = document.querySelector('.min');
const minNumEl = document.querySelector('.min-number');
const buttonMaxEl = document.querySelector('.max');
const maxNumEl = document.querySelector('.max-number');

// Функция вывода всех элементов
const displayArrayElemets = (array, allElementsEl) => {
    let allElements = '';

    for (let i = 0; i < array.length; i++) {
        allElements += array[i];

        if (i !== array.length - 1) {
            allElements += ', ';
        }
    }

    allElementsEl.textContent = allElements;
};

// Функция нахождения минимального числа
const findMinNumber = (array, minNumEl) => {
    let minNum = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNum) {
            minNum = array[i];
        }
    }
    minNumEl.textContent = minNum;
};

// Функция нахождения максимального числа
const findMaxNumber = (array) => {
    let maxNum = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }
    maxNumEl.textContent = maxNum;
};

// Вызываем функцию вывода всех элементов.
displayArrayElemets(numArray, allElementsEl);

// Обработчики событий при клике на кнопки
buttonMinEl.addEventListener('click', () => findMinNumber(numArray, minNumEl));
buttonMaxEl.addEventListener('click', () => findMaxNumber(numArray, maxNumEl));
