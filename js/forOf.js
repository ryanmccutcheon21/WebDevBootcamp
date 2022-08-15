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