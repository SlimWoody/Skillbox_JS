// Создаем массивы
const currentProductArr = ['Мышка', 'Клавиатура', 'Наушники'];
const newProductArr = ['Монитор', 'Принтер', 'Флешка'];

// Находим элементы
const productsListEl = document.querySelector('.products');
const buttonAddProduct = document.querySelector('.products-add');

// Создаем функцию добавления товара
const addProduct = (productArr) => {
    for (const element of productArr) {
        const product = element;

        // Проверяем нет ли повторяющихся товаров
        const isProductExist = Array.from(productsListEl.children).some(
            (li) => li.textContent === product
        );

        // Если повторений нет добавляем элемент с наименнование товара
        if (!isProductExist) {
            const liProductItem = document.createElement('li');
            liProductItem.classList.add('products__item');
            liProductItem.textContent = element;

            productsListEl.append(liProductItem);
        }
    }
};

// Вызов функции для загрузки текущих товаров
addProduct(currentProductArr);

// Добавил кнопку для добавлния новых товаров через обработчик событий.
buttonAddProduct.addEventListener('click', () => addProduct(newProductArr));
