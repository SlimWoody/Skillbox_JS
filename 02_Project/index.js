let elPrice = document.querySelector('.card__price');
let elCounter = document.querySelector('.card__counter input');
let elButton = document.querySelector('.card__button');
let elSum = document.querySelector('.card__sum');

const addSum = (price, counter) => {
    let sum = counter * price;
    return sum;
}

elButton.addEventListener('click', () => {
    let price = parseFloat(elPrice.textContent); // Преобразуем текст в число
    let counter = parseInt(elCounter.value); // Получаем актуальное значение
    elSum.textContent = addSum(price, counter); // Обновляем сумму
});