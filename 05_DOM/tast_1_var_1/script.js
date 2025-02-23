// Вариант с требованиями из задания без использования циклов, querySelectorAll.

// Находим элемент cart
const cartEl = document.querySelector('#cart');

// Создаем функцию addToCart
function addToCart(productName) {
    // Создаем элемент li
    const cartItem = document.createElement('li');
    // Добавляем класс cart__item
    cartItem.classList.add('cart__item');

    // Добавляем тест с именем товара
    cartItem.append(document.createTextNode(productName));

    //Добавлем элемент li c классом cart item в ul с классом cart
    cartEl.append(cartItem);
}
