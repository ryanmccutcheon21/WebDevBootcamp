// Not compatible with Internet Explorer

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'baseball']


// with for loop
// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visits reddit.com/r/${subreddits[i]}`)
// }

// For Of loop

// Syntax
/* 
for (variable of iterable) {
    statement
}
*/

for (let subreddit of subreddits) {
    console.log(`Visits reddit.com/r/${subreddit}`)
}
// Visits reddit.com/r/cringe
// Visits reddit.com/r/books
// Visits reddit.com/r/chickens
// Visits reddit.com/r/funny
// Visits reddit.com/r/pics
// Visits reddit.com/r/baseball


const seatingChart = [
    ['Kristen', 'Erik', 'Antonio', 'Kevin'],
    ['Geoffrey', 'Juanita', 'Namita'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student)
    }
}
// Kristen
// Erik
// Antonio
// VM118:3 Kevin
// Geoffrey
// Juanita
// Namita
// Yuma
// Sakura
// Jack
// Erika



// Iterating over Objects
// Object literals are not considered iterables
const testScores = {
    ryan: 80,
    raiden: 100,
    kayla: 99,
    nolan: 76,
    breanna: 83
}

// use for In to loop over object literals
for (let person in testScores) {
    console.log(person)
}
// will just loop over the object keys
// ryan
// raiden
// kayla
// nolan
// breanna

// to get the value, log testScores[person]
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`)
}
// ryan scored 80
// raiden scored 100
// kayla scored 99
// nolan scored 76
// breanna scored 83




// Other methods to iterate over Object literals


// use the keys method on the Object object
Object.keys(testScores);
// will return array of the keys in testScores
// ['ryan', 'raidem', 'kayla', 'nolan', 'breanna']


// use the values method
Object.values(testScores);
// will return an array of the values

// use the entries method
Object.entries(testScores);
// gives us a nested array of key: value pairs
// [
//     ['ryan', 80],
//     ['raiden', 100],
//     ['kayla', 99],
//     ['nolan', 76],
//     ['breanna', 83]
// ]


// Get an average of testScores
let total = 0;
let scores = Object.values(testScores);

for (let score of scores) {
    // console.log(score)
    total += score;
}
console.log(total / scores.length);