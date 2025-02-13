let carPower = +prompt('Введите мощность Вашего автомобиля в л.с :');

// Проверка на верный ввод
function isValid(item) {
    return item === 0 || isNaN(item) || item === '' || item === null;
}

if (isValid(carPower)) {
    alert('Данные некорректны');
} else {
    let betUp;
    let transportTax;

    switch (true) {
        case carPower < 100:
            betUp = 12;
            break;
        case carPower >= 100 && carPower < 125:
            betUp = 25;
            break;
        case carPower >= 125 && carPower < 150:
            betUp = 35;
            break;
        case carPower >= 150 && carPower < 175:
            betUp = 45;
            break;
        case carPower >= 175 && carPower < 200:
            betUp = 50;
            break;
        case carPower >= 200 && carPower < 225:
            betUp = 65;
            break;
        case carPower >= 225 && carPower < 250:
            betUp = 75;
            break;
        case carPower >= 250:
            betUp = 150;
            break;
        default:
            break;
    }
    transportTax = carPower * betUp;
    alert(`Сумма налога ${transportTax}`);
}
