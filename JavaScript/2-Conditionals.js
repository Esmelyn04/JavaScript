if (true) {
    console.log('This message will print!'); 
  }
  // Prints: This message will print!



  // If...Else Statements

if (false) {
    console.log('The code in this block will not run.');
} else {
    console.log('But the code in this block will!');
}
  // Prints: But the code in this block will!



    // Comparison Operators
 /*
    ( >, <, <=, >=, ===, !== )

    Less than: <
    Greater than: >
    Less than or equal to: <=
    Greater than or equal to: >=
    Is equal to: ===
    Is not equal to: !==
  */ 
    let hungerLevel = 7;

if (hungerLevel <= 7) {
    console.log('Time to eat!')
} else {
    console.log('We can eat later!')
}
// print: Time to eat!

if (5<10) {
    console.log("It's true")  //print: It's true
}


    // Logical Operators

/* 
the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)

 - When we use the && operator, we are checking that two things are true:
 - If we only care about either condition being true, we can use the || operator:
 - The ! not operator reverses, or negates, the value of a boolean:
*/
let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' || tirednessLevel > 8) {
  console.log('time to sleep')
} else {
  console.log('not bed time yet')
}
// print: time to sleep
if (mood === 'sleepy' || tirednessLevel > 5) {
  console.log("time to bed")
} else {
  console.log("not bed time")
}
// print: time to bed



    // Truthy and Falsy
    
/* 
So which values are falsy— or evaluate to false when checked as a condition? 
The list of falsy values includes:

    0
    Empty strings like "" or ''
    null which represent when there is no value at all
    undefined which represent when a declared variable lacks a value
    NaN, or Not a Number
*/
let myVariable = 'I Exist!';

if (myVariable) {
    console.log(myVariable)
} else {
    console.log('The variable does not exist.')
}
// print: 'I Exist'

let numberOfApples = 0;

if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
// Prints 'No apples left!'

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
// print: Great! You've started your work!

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
// print: This string is definitely empty.


if (wordCount || favoritePhrase) {
  console.log("It's ture")
} else {
  console.log("It's flase")
}
// print: It's true


        // Truthy and Falsy Assignment
let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger

let username2 = '';
let defaultName2 = username2 || 'Stranger';

console.log(defaultName2); // Prints: Stranger




        // Ternary Operator
let isNightTime = true
isNightTime ? 
console.log('Turn on the lights!') :
console.log('Turn off the lights!');
/* 
In the example above:

The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
Like if...else 
Preview: Docs In JavaScript, a statement is a unit of code that performs a specific action or task.
statements
, ternary 
Preview: Docs An operator is a special character or series of characters that perform a task in JavaScript.
operators
 can be used for conditions which evaluate to true or false.
*/
let isLocked = false;
isLocked ?
  console.log('You will need a key to open the door.') :
  console.log('You will not need a key to open the door.');
// print: You will not need a key to open the door.



let isCorrect = true;
isCorrect ?
  console.log('Correct!') : 
  console.log('Incorrect!');
// print: Correct!


let favoritePhrase2 = 'Love That!'
favoritePhrase2 === 'Love That!' ?
    console.log('I love that!') :
    console.log("I don't love that!");
// print: I love that!


            // Else If Statements
let stopLight = 'yellow';

if (stopLight === 'red') {
    console.log('Stop!');
} else if (stopLight === 'yellow') {
    console.log('Slow down.');
} else if (stopLight === 'green') {
    console.log('Go!');
} else {
    console.log('Caution, unknown!');
}
// print: 'Slow down' 

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.')
} else if(season === 'fall'){
  console.log('It\'s fall! Leaves are falling!')
} else if(season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}
// print: It's sunny and warm because it's summer!


            // The switch keyword

let groceryItem = 'papaya';

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}

// Prints 'Papayas are $1.29'

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!')
    break;
  case 'third place':
    console.log('You get the bronze medal!')
    break;
  default :
    console.log('No medal awarded.')
    break;

} // print: You get the gold medal!


athleteFinalPosition = 'third place'

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!')
    break;
  case 'second place':
    console.log('You get silver medal!')
    break;
  case 'third place':
    console.log('You get the bronze medal!')
    break;
  default :
    console.log('No medal awarded')
    break;
} // print: You get the bronze medal!


/*
        Conditional Statements
        Review
        Way to go! Here are some of the major concepts for conditionals:

An if statement checks a condition and will execute a task if that condition evaluates to true.
if...else statements make binary decisions and execute different code blocks based on a provided condition.
We can add more conditions using else if statements.
Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
The logical operator ||, or “or”, checks if either provided expression is truthy.
The bang operator, !, switches the truthiness and falsiness of a value.
The ternary operator is shorthand to simplify concise if...else statements.
A switch statement can be used to simplify the process of writing multiple else if statements. 
The break keyword stops the remaining cases from being checked and executed in a switch statement.
*/
