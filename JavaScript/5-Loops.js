/*
  Review Loops

  Great job! In this lesson, we learned how to write cleaner code with 
  loops. A loop is a programming tool that is used to repeat a set of instructions.

  You now know:  

  - Loops perform repetitive actions, so we don’t have to code that process manually every time.

      1. A for loop contains three expressions separated by ; inside the parentheses:
      2. a stopping condition is the condition that the iterator variable is evaluated against — 
         if the condition evaluates to true, the code block will run. If it evaluates to false, the code will stop.
      3. an iteration statement is used to update the iterator variable on each loop.

  - How to write for loops with an iterator variable that increments or decrements
  - How to use a for loop to iterate through an array
  - A nested for loop is a loop inside another loop
  - while loops allow for different types of stopping conditions
  - Stopping conditions are crucial for avoiding infinite loops.
  - do...while loops run code at least once — only checking the stopping condition after the first execution
  - The break keyword allows programs to leave a loop during the execution of its block
*/



// The for loop

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
// Output: 
// 0 
// 1
// 2
// 3

for (counter = 5; counter < 10; counter++){
  console.log(counter)
}

// Output: 
// 5 
// 6 
// 7 
// 8 
// 9


// Looping in Reverse

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}
// Prints: 3, 2, 1, 0

for (let counter = 10; counter >= 0; counter --){
  console.log(counter)
}
// Prints: 10, 9, 8, ..., 0



// Looping through Arrays

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
// Prints: 
// Grizzly Bear
// Sloth 
// Sea Lion

const vacationSpots = ['Bali', 'Paris', 'Tulum']

for (i=0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`)
}
// I would love to visit Bali
// I would love to visit Paris
// I would love to visit Tulum


// Nested Loops

const arrayA = [6, 19, 20];
const arrayB = [19, 81, 2];
for (let i = 0; i < arrayA.length; i++) {
  for (let j = 0; j < arrayB.length; j++) {
    if (arrayA[i] === arrayB[j]) {
      console.log('Both arrays have the number: ' + arrayB[j]);
    }
  }
}
// Output: Both arrays have the number: 19

const bobsFollowers = ['Jose','Maria','Pedro','Clara'];
const tinasFollowers = ['Victor','Jose','Clara'];
const mutualFollowers = [];

for (let i=0; i < bobsFollowers.length; i++){
  for (let j=0; j < tinasFollowers.length; j++ ){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}

console.log(mutualFollowers) // Output: ['Jose', 'Clara']


// The While Loop

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}


// A while loop that prints 1, 2, and 3
let counter1 = 0
while (counter1 < 4) {
  console.log(counter1)
  counter1++
}


const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[ Math.floor(Math.random() * 4)
   ]
   console.log(currentCard)
   }

// Output: random number of cards


// Do...While Statements
// Use when we want the code to run at leats once 

let countString = '';
let ii = 0;

do {
  countString = countString + ii;
  ii++;
} while (ii < 5);

console.log(countString); // Output: 01234



let cupsOfSugarNeeded = 5
let cupsAdded = 0

do {
  cupsAdded++
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded)

// Output:
// 1 cup was added
// 2 cup was added
// 3 cup was added
// 4 cup was added
// 5 cup was added


// The break Keyboard
//The break keyword allows programs to “break” out of the loop from within the loop’s block.

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');
// Output: 
// Banana.
// Banana.
// Banana.
// Orange you glad I broke out the loop!


const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i=0; i < rapperArray.length; i++) {
  console.log(rapperArray[i])
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don't know, now you know.")

// Output: 
// Lil' Kim
// Jay-Z
// Notorious B.I.G.
// And if you don't know, now you know.


let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//for loop VS for...of loop VS for...in loop


console.log('for loop')
for (item = 0; item < groceryList.length; item++) {
  console.log(groceryList[item])
}
// Output: 
// for loop
// orange juice
// bananas
// coffee beans
// brown rice
// pasta
// coconut oil
// plantains

console.log('')
console.log('for ... of loop') // Similar to python syntax (more easy)
for (const item of groceryList) {
  console.log(item)
}
// Output:
// for ... of loop
// orange juice
// bananas
// coffee beans
// brown rice
// pasta
// coconut oil
// plantains

console.log('')
console.log('for ... in loop') // iterate through the key of a array
for (const item in groceryList) {
  console.log(item)
}

// Output:
// for ... in loop
// 0
// 1
// 2
// 3
// 4
// 5
// 6
