// Function Declaration

function calcAverage (namA, namB, namC) {
    return ((namA + namB + namC) / 3) 
}

console.log(calcAverage(6, 11, 3));

// Arrow Function
let newCalcAverageFn = (namA, namB, namC) => ((namA + namB + namC)/3);

console.log(newCalcAverageFn(8, 17, 4));