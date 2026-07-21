// to check if a number is a factorial of 96 or not add if the number is more than 96 the say not valid

const num = 8;

if(num > 96){
    console.log("Not valid");
}

let isFactorial = false;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

if (factorial === 96) {
    isFactorial = true;
}

console.log(isFactorial);
