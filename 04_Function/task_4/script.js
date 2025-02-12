let count = 3;

// Function Declaration
function countUp () {
    return ++count;
}

console.log(countUp());
console.log(countUp());

//Arrow Function

const newCountUp = () => ++count;

console.log(newCountUp());
console.log(newCountUp());