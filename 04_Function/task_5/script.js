let priceItem = 25000;
let amountItem = 3;
let discountItem = 20;

function calcTotalSum(price, amount, discount) {
    let sumPrice = price * amount; // Вычисляем сумму покупки 
    let sumDiscount = sumPrice * (discount / 100); // Вычесляем сумму скидки
    let totalSum = sumPrice - sumDiscount // ВЫчисляем сумму покупки со скидкой
    return totalSum;
}

let totalSum = calcTotalSum(priceItem, amountItem, discountItem);

console.log(`Сумма со скидкой ${totalSum}`);

// Сокращаем код 

let newTotalSum = (price, amount, discount) => price * amount * (1 - discount / 100);
console.log(`Сумма со скидкой ${newTotalSum(priceItem, amountItem, discountItem)}`);




