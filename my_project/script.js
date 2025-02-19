const cart = {}; // Объект для хранения товаров

            document
                .querySelectorAll('.product-card__button')
                .forEach((button) => {
                    button.addEventListener('click', (event) => {
                        const card = event.target.closest('.product-card');
                        const id = card.dataset.id;
                        const name = card.dataset.name;
                        const price = Number(card.dataset.price);
                        const quantity = Number(
                            card.querySelector('.product-card__quantity').value
                        );

                        // Если товар уже есть в корзине — увеличиваем количество
                        if (cart[id]) {
                            cart[id].quantity += quantity;
                        } else {
                            cart[id] = { name, price, quantity };
                        }

                        updateCart();
                    });
                });

            function updateCart() {
                const cartList = document.querySelector('.cart__list');
                cartList.innerHTML = '';

                let total = 0;

                for (const id in cart) {
                    const { name, price, quantity } = cart[id];
                    const itemTotal = price * quantity;
                    total += itemTotal;

                    const listItem = document.createElement('li');
                    listItem.classList.add('cart__item');
                    listItem.innerHTML = `
          <span class="cart__name">${name}</span>
          <span class="cart__quantity">x${quantity}</span>
          <span class="cart__price">₽${itemTotal}</span>
        `;

                    cartList.appendChild(listItem);
                }

                document.querySelector('.cart__sum').textContent = `₽${total}`;
            }

            document
                .querySelector('.cart__apply')
                .addEventListener('click', () => {
                    const promoInput = document
                        .querySelector('.cart__promo')
                        .value.trim();
                    let discount = 0;

                    if (promoInput === 'SALE10') {
                        discount = 10;
                    } else if (promoInput === 'SALE20') {
                        discount = 20;
                    }

                    if (discount > 0) {
                        const totalElement =
                            document.querySelector('.cart__sum');
                        let total = Number(
                            totalElement.textContent.replace('₽', '')
                        );
                        total = total - (total * discount) / 100;
                        totalElement.textContent = `₽${total}`;
                    }
                });