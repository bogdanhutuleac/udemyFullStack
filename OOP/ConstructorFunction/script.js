// This is a Constructor Function...
// class Color {
//   constructor(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//   }
// }
// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// console.log(hex(255, 100, 25)); // will transform the color from rgb to hex wich is #ff6419
// function rgb(r, g, b) {
//   return `rgb(${r},${b},${g})`;
// }

// //factory function
// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   // .rgb is a method aswell
//   color.rgb = function () {
//     const { r, g, b } = this;
//     // console.log(this);
//     return `rgb(${r},${g},${b})`;
//   };
//   // method .hex can be called to apply the function to the object inside this class
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(32, 255, 150);
// firstColor.rgb(); //rgb(32,255,150)
// firstColor.hex(); //#20ff96

// const black = makeColor(0,0,0);

// black.hex === firstColor.hex //false
// "hi".slice === "bye".slice //true
//what is happening is that every data type from js is using the same prototype, so in this case .slice method is the same on both ends as it is using the prototype of a string data, but with the first where we compare the hex files it is created a hex file individualy for every element

/////////////////////////
// constructor function
/////////////////////////

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this); //"this" will refer to the window
//   // this.rgb = function () {
//   //       const { r, g, b } = this;
//   //       // console.log(this);
//   //       return `rgb(${r},${g},${b})`;
//   //     };
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   // console.log(this);
//   return `rgb(${r},${g},${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// console.log(Color(255, 0, 0));
// Color(255, 0, 0); //will return undefined

/////////////////////////
// The new operator
/////////////////////////
// To make it work we need to introduce the new keyword - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

// Creates a blank, plain JavaScript object.
// Adds a property to the new object (__proto__) that links to the constructor function's prototype object
// Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
// Returns this if the function doesn't return an object.

// new Color(255, 40, 100); //new will work because will create a new object and "this" will refer to the new created object, not to the windows

// const color1 = new Color(40, 60, 20);
// const color2 = new Color(0, 0, 0);

// console.log(color1.hex()); //#283c14
// console.log(color2.hex()); //#000000

// color1.hex === color2.hex; //true
// // we return true now because we have defined .hex method under __proto__ , not just inside a function
// console.log(color1.hex === color2.hex);

// Color.prototype.rgba = function(a=1.0){
//   const {r,g,b} = this;
//   return `rgba(${r},${g},${b},${a})`;
// }
// console.log(color1.rgba(0.4))

/////////////////////////
// Classes
/////////////////////////

// For the name of the classes we use cap words

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    // console.log('Inside Constructor')
    // console.log(r,g,b)
  }
  // short version of adding a method
  greet() {
    return `Hello from ${this.name}`;
  }
  innerRGB() {
    // destructure r,g,b from this
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1) {
    return `rgba(${this.innerRGB()},${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const red = new Color(255, 67, 89, "tomato");
console.log(red);
const white = new Color(255, 255, 255, "white");
console.log(white.greet());
console.log(white.hex());
console.log(white.rgb());
console.log(red.rgba(0.2));
document.body.style.backgroundColor = red.rgba(0.5);
