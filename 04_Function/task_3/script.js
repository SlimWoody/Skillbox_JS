// Arrow Function
let celsiusToFahrenheit = (temp) => {
    let fahrenheitTemp = temp * 1.8 + 32;
    return fahrenheitTemp;
};


let fahrenheitToCelsius = (temp) => {
    let celsiusTemp = (temp - 32) / 1.8;
    return celsiusTemp;
};

console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(77));

// В одну строку

let newCelsiusToFahrenheit = (temp) => temp * 1.8 + 32;
let newFahrenheitToCelsius = (temp) => (temp - 32) / 1.8;

console.log(newCelsiusToFahrenheit(25));
console.log(newFahrenheitToCelsius(77));

