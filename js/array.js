const beatles = ['john', 'paul', 'george', 'ringo'];

beatles.pop();
// 'ringo'

console.log(beatles);
// ['john', 'paul', 'george']

beatles.push('ringo');
// 'ringo'

console.log(beatles);
// ['john', 'paul', 'george', 'ringo']

beatles.shift();
// 'john'

console.log(beatles);
// ['paul', 'george', 'ringo']

beatles.unshift('john');
// ['john', 'paul', 'george', 'ringo']


beatles[1];
// 'paul'

beatles[2][3];
// 'r'


// Common Arrya methods


// Concat
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);;

console.log(arr3);
// ['a', 'b', 'c', 'd', 'e', 'f']




// Includes - returns boolean - case sensitive
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('dog'));
// true

console.log(pets.includes('at'));
// false

console.log(pets.includes('Cat'));
// fasle



// IndexOf
arr1.indexOf('b');
// 1
arr1.indexOf('d');
// -1
// falsey value




// Reverse - destructive method (chanes original)
pets.reverse();
// ['bat', 'dog', 'cat']
console.log(pets);
// ['bat', 'dog', 'cat']
// changed the original pets array





// Slice
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
colors.slice();
//  ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// will return new array from original colors
colors.slice(3);
// ['green', 'blue', 'indigo', 'violet']
const coolColors = colors.slice(2.4);
// ['yellow', 'green']
// starts at first index, and goes up to and not including second argument index
const last3 = colors.slice(-3);
// ['blue', 'indigo', 'violet']





// Splice - changes contents of array by removing or replacing existing element
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// ['Jan', 'Feb', 'March', 'April', 'May']

months.splice(months.length, 0, 'June', 'July', 'August', 'September');
console.log(months);
//  ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September']

months.splice(2, 1);
//  ['March']
// deletes 1 element at index of 2 and returns it

months.splice(1, 2);
//  ['Feb', 'March']
// returns 2 deleted elements starting form index of 1





// Equality testing
['hi', 'bye'] === ['hi', 'bye'];
// false
[1] === [1];
// false
[1] == [1];
// false

// Difference references in memory

const nums = [1, 2, 3];
const numsCopy = nums;
nums
// [1, 2, 3]
numsCopy
// [1, 2, 3]
nums.push(4);
nums
// [1, 2, 3, 4]
numsCopy
// [1, 2, 3, 4]
// they are using the same reference in memory
numsCopy.pop();
// 4
nums
// [1, 2, 3]
numsCopy
// [1, 2, 3]
nums === numsCopy
// true






// Multi-dimensional
const colorsArr = [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    ['yellow', 'golden red'],
    ['green', 'olive'],
    ['blue', 'navy blue'],
    ['purple', 'orchid']
]

const gameBoard = [
    ['X', 'O', 'X'],
    ['O', null, 'X'],
    ['O', 'O', 'X'],
]

const centerBoard = gameBoard[1][1];
// null