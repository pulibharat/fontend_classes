// to check if a number is a factorial of 84 or not
const num = 8;
let isFactorial = false;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

if (factorial === 96) {
    isFactorial = true;
}

isFactorial;