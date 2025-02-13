let carPower = +prompt('Введите мощность Вашего автомобиля в л.с :');
let betUp;
let transportTax;

switch (true) {
    case carPower < 100:
        betUp = 12;
        transportTax = carPower * betUp;
        alert(`Сумма налога ${transportTax}`);
        break;
    case carPower >= 100 && carPower < 125:
        betUp = 25;
        transportTax = carPower * betUp;
        alert(`Сумма налога ${transportTax}`);
        break;
    case carPower >= 125 && carPower < 150:
        betUp = 35;
        transportTax = carPower * betUp;
        alert(`Сумма налога ${transportTax}`);
        break;
    case (carPower >= 150 && carPower) < 175:
        betUp = 45;
        transportTax = carPower * betUp;
        alert(`Сумма налога ${transportTax}`);
        break;
    case carPower >= 175 && carPower < 200:
        betUp = 50;
        transportTax = carPower * betUp;
        alert(`Сумма налога ${transportTax}`);
        break;
    case carPower >= 200 && carPower < 225:
        betUp = 65;
        transportTax = carPower * betUp;
        alert(`Сумма налога ${transportTax}`);
        break;
    case carPower >= 225 && carPower < 250:
        betUp = 75;
        transportTax = carPower * betUp;
        alert(`Сумма налога ${transportTax}`);
        break;
    case carPower >= 250:
        betUp = 150;
        transportTax = carPower * betUp;
        alert(`Сумма налога ${transportTax}`);
        break;
    default:
        break;
}
