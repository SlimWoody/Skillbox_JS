let cartInsertATM = Boolean(
    +prompt(
        'Вставте карту(Введите 1-9 если вставили карту. \n Введите 0 что бы продолжить без карты)'
    )
); // Наличие карты в банкомате

let balansCart = 1000; //Текущий баланс карты

if (cartInsertATM === true) {
    let menuSelection = +prompt(
        'Выберите тип операции: \n 1 - Пополнить баланс \n 2 - Снять деньги \n 3 - Узнать баланс карты'
    ); // Переменная с типом операции.
    switch (menuSelection) {
        case 1:
            // Пополнение карты
            let topUpBalans = +prompt('Введите сумму для пополнения');
            balansCart += topUpBalans;
            alert(`Баланс Вашей карты ${balansCart}`);
            break;
        case 2:
            // Снятие наличных
            let withdrawingCash = +prompt('Введите сумму для снятия наличных');
            if (withdrawingCash <= balansCart) {
                balansCart -= withdrawingCash;
                alert('Заберите деньги');
                alert(`Баланс Вашей карты ${balansCart}`);
            } else {
                alert('Недостаточно средсточно средств. Операция отклонена');
            }
            break;
        case 3:
            // Проверка баланса
            alert(`Баланс Вашей карты ${balansCart}`);
            break;
        default:
            alert('Неверная команда');
            break;
    }
} else {
    alert('Карта не вставлена. Операция отклонена');
}
