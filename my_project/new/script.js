const userName = 'Павел';

const contentEl = document.querySelector('.content');
console.log(contentEl);

const h1TitleContent = document.createElement('h1');

h1TitleContent.classList.add('content__title');
h1TitleContent.textContent = `Добро пожаловать ${userName}`;

contentEl.append(h1TitleContent);

h1TitleContent.classList.remove('content__title');


getAccess();

function getUserAge() {
    return +prompt(`Сколько Вам лет ${userName}`);
}


function getAccess(callback) {
    const userAge = getUserAge();

    if (userAge < 18) {
        alert('В доступе отказнно')
    } else {
        alert('Заходи')
    }
}