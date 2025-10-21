/*
Introduction to JavaScript

Review
Let’s take one more glance at the concepts we just learned:


- Data is printed, or logged, to the console, a panel that displays messages, with console.log().

- We can write single-line comments with // and multi-line comments between /* and  */      /*

- There are eight fundamental data types:
    -numbers 
    -BigInts
    -strings 
    -booleans 
    -null 
    -undefined 
    -symbols 
    -objects

- Numbers are any number without quotes. 
  For example: 23.8879

- Strings are characters wrapped in single or double quotes. 
  For example: 'Sample String'

- The built-in arithmetic operators include 
   +, -, *, /, and %.

- Objects, including instances of data types, can have properties that store information. 
  The properties are denoted with a . after the name of the object. 
  For example: 'Hello'.length

- Objects, including instances of data types, can have methods that perform actions. 
  Methods are called by appending the object or instance with a period, the method name, and parentheses. 
  For example: 'hello'.toUpperCase().

- We can access properties and methods by using the . (dot operator).

- Built-in objects, including Math, are collections of methods and properties that JavaScript provides.

*/

// Console.log()
console.log("Hello World");
console.log(10)

// Data Types
console.log('JavaScript') // string
console.log(2011) // number
console.log(true) // boolean


// Atithmetic Operators
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
console.log(14 % 3); //Prints 2

// String Concatenation
console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.') // Prints 'I love to code.'
console.log('One' + ', ' + 'two' + ', ' + 'three!');  // Prints 'One, two, three!'

// String Interpolation `string` 
let year = 2025
console.log(`This is ${year}`)

// Properties
console.log('Hello'.length); // Prints 5

// Methods
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
console.log('Codecademy'.toUpperCase()); // Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('    Remove whitespace   '.trim()); // Use a string method to log the following string without whitespace at the beginning and end of it.

// Built-in Objects
console.log(Math.random()); // Prints a random number between 0 and less than 1
Math.random() * 51; // Prints a number btw 0 - 50
Math.random() * 50 + 1 // Prints a number btw 0 - 50
Math.floor(Math.random() * 50); // Prints a whole number
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

/*
Review Variables

- Variables hold reusable data in a program and associate it with a name.

- Variables are stored in memory.

- The var keyword is used in pre-ES6 versions of JS.

- let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.

- Variables that have not been initialized store the primitive data type undefined.

- Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.

- The + operator is used to concatenate strings, including string values held in variables.

- In ES6, template literals use backticks ` and ${} to interpolate values into a string.

- The typeof keyword returns the data type of a value (e.g., string).

*/


// Variables
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

const myName = 'Gilberto'; 
console.log(myName); // Output: Gilberto

const entree = 'Enchiladas'
console.log(entree)
//entree = 'Tacos' // TypeError


// Mathematical Assignment Operators
let w = 4;
w = w + 1;
console.log(w); // Output: 5

let w1 = 4;
w1 += 1;
console.log(w); // Output: 5

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;
// These console.log() statements below will help you check the values of the variables. 
console.log('The value of levelUp:', levelUp); // Prints: The value of levelUp: 15
console.log(`The value of levelUp: ${levelUp}`) // Prints: The value of levelUp: 15
console.log('The value of powerLevel:', powerLevel); // Prints: The value of powerLevel: 8901
console.log('The value of multiplyMe:', multiplyMe); // Prints: The value of multiplyMe: 352
console.log('The value of quarterMe:', quarterMe); // Prints: The value of quarterMe: 288

// The Increment and Decrement Operator
let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

// String Concatenation with Variables
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

// String Interpolation
const myPet1 = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

// typeof operator
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean