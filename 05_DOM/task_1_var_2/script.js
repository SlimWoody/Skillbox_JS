// Находим нужные элементы
const buttonsAddCartEls = document.querySelectorAll(
    '.catalog__button-add-cart'
);
const cartListEl = document.querySelector('.cart__list');

// Функция создания и добавления элемента в корзину
function createElementAndAppendCart(productName) {
    const cartItem = document.createElement('li');
    const spanEl = document.createElement('span');

    cartItem.classList.add('cart__item');

    spanEl.textContent = productName;

    cartItem.append(spanEl);
    cartListEl.append(cartItem);
}

// Обработчик событий EventListener. Проходим по всем кнопкам с помощью цыкла forEach.
buttonsAddCartEls.forEach((button) => {
    button.addEventListener('click', function (e) {
        const cart = button.previousElementSibling;
        const productName = cart.dataset.name;

        createElementAndAppendCart(productName);
    });
});
