// For loop

// For loop Syntax
/*
 for (
     [initialExpression];
     [condition];
     [incrementExpression]
 )
 */

for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// start at 1, stop at 10, add 1 each time
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10




// Looping over arrays
const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}
// 0 'lions'
// 1 'tigers'
// 2 'bears'




// Nested Loops
let str = 'LOL';

for (let i = 0; i <= 4; i++) {
    console.log('Outer:', i);
    for (let j = 0; j < str.length; j++) {
        console.log('     Inner:', str[j]);
    }
}
/* 
Outer: 0
    Inner: L
    Inner: O
    Inner: L
Outer: 1
    Inner: L
    Inner: O
    Inner: L
Outer: 2
    Inner: L
    Inner: O
    Inner: L
Outer: 3
    Inner: L
    Inner: O
    Inner: L
Outer: 4
    Inner: L
    Inner: O
    Inner: L
*/

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row: ${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}
/*
Row: 1
Kristen
Erik
Namita
Row: 2
Geoffrey
Juanita
Antonio
Kevin
Row: 3
Yuma
Sakura
Jack
Erika
*/





// While loop
let num = 0;
while (num < 5) {
    console.log(num);
    num++;
}
// 0
// 1
// 2
// 3
// 4

while (num < 5) {
    num++;
    console.log(num);
}
// 1
// 2
// 3
// 4
// 5


const SECRET = 'BabyHippo';

let guess = prompt('Enter the secret code...');
while (guess !== SECRET) {
    guess = prompt('Enter the secret code...')
}