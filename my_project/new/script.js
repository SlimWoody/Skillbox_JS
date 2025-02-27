const comentArr = ['Хороший товар', 'Пойдет для новичка', 'Так себе', 'Лучшее решение'];

const contentEl = document.querySelector('.content');

for (let i = 0; i < comentArr.length; i++) {
    const h3El = document.createElement('h3');
    h3El.textContent = `Комментарий №${i + 1}`;
    const productNameEl = document.createElement('p');
    productNameEl.textContent = comentArr[i];
    contentEl.append(h3El);
    contentEl.append(productNameEl);
}