/* Basic Funciton */

function singSong() {
    console.log('do');
    console.log('re');
    console.log('mi');
};
singSong();



/* Function with arguments */

function greet(firstName, lastName) {
    console.log(`Hi ${firstName} ${lastName[0]}!`);
};
greet('Ryan', 'McCutcheon');



function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    console.log(result);
}
repeat('I love Kayla!', 5);


/* Return keyword to store values */
function add(x, y) {
    let answer = (x + y);
    return answer;
};
console.log(add(21, 12));


/* Practice */
