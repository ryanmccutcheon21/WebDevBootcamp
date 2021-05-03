// What are Prototypes ?
// if you look at an array(just type in [] in the console)
// you'll see __proto__ object. 
// Prototypes are the mechanism by which JS objects inherit
// features from one another. 
//     You'll see .prototype.someMethod for arrays on mdn.
/* if you set a function in an array, they'll be under the proto
    property. A prototype contains a bunch of methods for arrays,
    so it doesn't have to be rewritten for every array,
    they're there for every array defined under the prototype object.
    if you save the body to a variable like,
    const body = document.body;
    then console.dir(body);
    you'll see a bunch of properties specific to the body.
    It also has a proto. It's prototype is an html body element.
    There are a bunch of methods and properties that correspond to
    that prototype template.
    Prototypes are objects that contain methods that we can create
    multiple objects that share the same prototype, so they all
    have access to those methods without having to have their own
    copy.
    We can add our own methods to prototype.
    For example: if we do
    String.prototype we can see all the methods available to
    strings.
    Now do String.prototype.yourMethodName = () => {
    alert('GO AWAY');
    }
    if we make a string like this:
    const cat = 'Blue';
    and then do
    cat.yourMethodName();
    it will trigger the alert.
    Now everytime you make a string, unless your refresh the page,
    you now have access to a new string method.
    Can also add on a property.
    Can do:
    String.prototype.yell = function() {
    console.log(this);
    };
    then if you make some string like:
    "hello".yell();
    the this in the console.log referred to the string "hello"
    if you made it console.log(this.toUpperCase);
    it will change the text to uppercase.
    can do return `${this.toUpperCase}!!!!!!!`
    and do "I love you".yell();
    it will return "I LOVE YOU!!!!!!!!"
    Not recommended to do any of this, just helps to understand prototypes.
    */