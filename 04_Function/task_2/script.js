
// F = C * 1.8 + 32
// C = (F - 32) / 1.8


// Function Declaration
function celsiusToFahrenheit (temp) {
    return temp * 1.8 + 32
}

function fahrenheitToCelsius(temp) {
    return (temp - 32) / 1.8
}
// Вызов + вывод
console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(77));

