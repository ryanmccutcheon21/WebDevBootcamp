const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;


// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;


// module.exports is by default an empty object
// it is what we want to export to be able to use in
// other files.
// See app.js



// Shorter way of doing the module.exports

exports.add = add;

// this will also work when referring to 
// variables you are trying to export
// doesn't work with strings.