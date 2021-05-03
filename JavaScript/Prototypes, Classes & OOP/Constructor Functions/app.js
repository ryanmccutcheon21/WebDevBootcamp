/*
Constructor Functions:

the 'new' keyword.
For example:
new Array()
makes us a new array. Not commonly used, just an example of the new keyword
It's an operator, and is preferable over the factory function approach.

read the mdn new operator
constructor funcitons usually start with a capital letter.
Constructor Function Example:

function Color(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

if you call Color in the console like:
Color(255,0,0);
it returns undefined. Why?
if we add console.log(this); at the bottom of the funciton,
under this.b = b;
You will get the window object returned, meaning this refers to the window.
The secret is the new operator. When we call the function with new
before the function call, it behaves differently.

Step 1: Creates a blank, plain JS object.
2: Links (sets the constructor of) this object to another object;
3: Passes the newly created object from Step1 as the this context;
4: Returns this if the function doesn't return its own object;

new Color(255, 40, 100);   will make a new object now.
console.log this to see the difference.
Can save to a variable to save it.
Now we can add methods not to the individual object, but
to the prototype.

Now we can use the rgb creator function and apply it to the
Color object by using prototype.
Example:

function Color(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

const color1 = rgb(240, 50, 12);
const color2 = rgb(155, 50, 0);

Now the rgb function is in the Color prototype. Now it is not
recreated for every color, it is accessable in the prototype for
the Color object. See the console.log for examples and to see it work.
Now color1.rgb === color2.rgb is true. Because the rgb funciton
is the same, not recreated and is in the proto for these colors.
DON'T WANT TO USE ARROW FUNCTIONS BECAUSE THEY BEHAVE DIFFERENTLY WITH
THE KEYWORD THIS.


We can shorten this all up, by putting it in a class.
We use capital letters for classes.
We always add in a constructor. It is a function that
will execute immediately whenever a new instance of the
class is created.

Usually in the constructor, we are going to access 'this'

Ex:

class Color {
    constructor(r, g, b, name) {
    // console.log('INSIDE CONSTRUCTOR!');
    // console.log(r, g, b);
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    }
    greet() {
    return `Hello from ${this.name}!`;
    }
    rgb() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b});
    }
}

const c1 = new Color(255, 67, 89, 'tomato');


We don't have to use .prototype in methods this way either.
See: greet()
This is now a method, on every Color. But not on the instances,
it's just like having a prototype, without having to
type prototype.

c1.greet();
// Will produce, 'Hello from tomato!'

c1.rgb();
// will produce the rgb string now: 'rgb(255, 67, 89)'

*/



/*
            MORE CLASES PRACTICE!!!


hsl colors are structured like this:

hsl(hue, saturation, lightness);
hue: 0-360
saturatuion: 0-100%
lightness: 0-100%; 100 being white





            EXTENDS AND SUPER KEYWORDS!!!!!

- Both deal with inheritance and subclassing.

class Cat {
//    constructor(name, age){
//    this.name = name;
//    this.age = age;
//    }
//    eat() {
//    return `${this.name} is eating!`;
//    }
    meow() {
    return 'MEOW!!!!';
    }
}

const monty = new Cat('monty', 9);

- now monty.eat() will return 'monty is eating!;

class Dog {
//    constructor(name, age) {
//    this.name = name;
//    this.age = age;
//    }
//    eat() {
//    return `${this.name} is eating!`;
//    }
    bark() {
    return 'WHOOOF!';
    }
}

- Both classes are very similar, so we can take a lot of the duplicate
  funcitonality and make a new class that will be a parent class.

class Pet {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    eat() {
    return `${this.name} is eating!`;
    }
}

- Use extends keyword to add the functionality of Pet to the
  Dog and Cat classe.

class Cat extends Pet{
    meow() {
    return 'MEOW!!!!';
    }
}

class Dog extends Pet {
    bark() {
    return 'WHOOOF!';
    }
}


const wyatt = new Dog('Wyatt', 13);

wyatt;   // in the console will return a dog with the name and age set.
// but that isn't in the dog class, it uses the constructor class
// from pet since there isn't a constructor in Dog

wyatt.eat(); // returns 'Monty is eating!'

- Sometimes you want to rely on the exact same constructor from your
super class. But if you wanted to have some additional information
for Cat for example. Cat would look like:

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
    }
    meow() {
    return 'MEOW!!!!';
    }
}

- Dont' need to use this.name = name; & this.age = age; in the Cat
constructor because it is taken from the super class, Pet.

- SUPER is a reference to the class we are extending from

*/