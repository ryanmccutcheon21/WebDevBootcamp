/*
Factory Functions:

function hex(r,g,b) {
    return '#' + ((1 << 24)) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

returns the hex number from the rgb color.

function makeColor(r,g,b){
    const color = {}; // starts empty
    color.r = r; // now we're adding properties, based off provided arguments
    color.g = g;
    color.b = b;
    color.rgb = function() {    // now we add methods that return an object
    const { r, g, b } = this;
    // destructures from this;
    // so instead of having to write
    // return `rgb(${this.r}, ${this.g}, ${this.b})`;
    // we can write
    return `rgb(${r}, ${g}, ${b})`;
    // and it does the same thing
    };
    color.hex = function hex(r,g,b) {
    return '#' + ((1 << 24)) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
// now by storing the methods on the object, and the object
// contains the rgb properties, we can access them

    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.rgb(); make an rgb string
firstColor.hex(); and it returns a hex color


// this is not the main way most people create objects based off of a pattern.

*/