let max = parseInt(prompt('Enter the max number'));

// fix bug if user enter invalid type like a string, then the max number will be NaN because that is returned from parseInt, and in Math we are multiplying by Nan
// NaN is falsey, so use !max and if NaN is returned from paresInt, the user will be prompted again
while (!max) {
    let max = parseInt(prompt('Enter a valid number'));
}

// use input of max variable to set the max number of the targetNum
const targetNum = Math.floor(Math.random() * max) + 1;
// console.log(targetNum);

let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too high! Enter a new number.');
    } else {
        guess = prompt('Too low! Enter a new number.');
    }
}
if (guess === 'q') {
    console.log('OK, YOU QUIT.');
} else {
    console.log('CONGRATS! YOU WIN!');
    console.log(`You got it! It took you ${attempts} attempts.`);
}