const currentProductArr = ['Мышка', 'Клавиатура', 'Наушники'];
const newProductArr = ['Монитор', 'Принтер', 'Флешка'];

const productsListEl = document.querySelector('.products');
const buttonAddProduct = document.querySelector('.products-add');

const addProduct = (productArr) => {
    for (let i = 0; i < productArr.length; i++) {
        const product = productArr[i];

        const isProductExist = Array.from(productsListEl.children).some(
            (li) => li.textContent === product
        );

        if (!isProductExist) {
            const liProductItem = document.createElement('li');
            liProductItem.classList.add('products__item');
            liProductItem.textContent = productArr[i];

            productsListEl.append(liProductItem);
        }
    }
};

addProduct(currentProductArr);

buttonAddProduct.addEventListener('click', () => addProduct(newProductArr));
