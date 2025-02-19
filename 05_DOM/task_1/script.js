// Находим нужный элемент на странице 
const buttonAddCartEl  = document.querySelectorAll('.catalog__button-add-cart');
const cartListEl = document.querySelector('.cart__list');

//Создаем элемент
const cartItem = document.createElement('li');

// Присываиваем класс 
cartListItem.classList.add = 'cart__item';




buttonAddCartEl.forEach(button => {
    button.addEventListener('click', function (e) {
        const cart = button.previousElementSibling;
        const productName = cart.dataset.name;
        

    });
});