const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.4,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};


const person = {
    firstName: 'Ryan',
    lastName: 'McCutcheon'
};



// Extracting data
const kitchenSink = {
    favNum: 92829,
    isFunny: true,
    colors: ['red', 'orange']
};

kitchenSink['favNum'];
// 92829

kitchenSink.colors;
// ['red', 'orange']


// Difference between dot method and bracket notation
const years = {
    1999: 'Good',
    2020: 'Not so good',
}
// all keys are converted to strings, except for symbols
years['1999'];
// 'Good'
years[1999];
// 'Good'
// number converts automatically to string using bracket notation
kitchenSink[favNum];
// Error - assumes favNum is a variable name

// Have the ability to put an expression in bracket notation
years['1999' + '2020']
// 'GoodNot so Good'

let birthYear = 1999;
years.birthYear;
// Error - not a key in years object
years[birthYear];
// 'Good'
// uses value of birthYear variable 





// Updating Objects
const midterms = {
    danielle: 96,
    thomas: 78
};
// change thomas's score
midterms.thomas = 88;

console.log(midterms);
// {danielle: 96, thomas: 88}

// Add something in
midterms.ezra = 54;
midterms['Antonio'] = 92;

console.log(midterms)
// {danielle: 96, thomas: 88, ezra: 54, Antonio: 92}





// Nesting arrays and objects
const comments = [
    { username: 'Tammy', text: 'lololol', votes: 9 },
    { username: 'Brad', text: 'hahaha', votes: 987 }
]

comments[1].text || comments[1]['text']
// 'hahaha'