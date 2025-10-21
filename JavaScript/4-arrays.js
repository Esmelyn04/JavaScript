/*
    Review Arrays

    Nice work! In this lesson, we learned these concepts regarding arrays:

    Arrays are lists that store data in JavaScript.
    Arrays are created with brackets [].
    Each item within an array is located at a numbered position, or index, starting at 0.

    We can access one item in an array using its index, with syntax like: myArray[0].
    We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
    Arrays have a .length property, which allows you to see how many items are in an array.

    Arrays have their own methods, including .push()and .pop(), which add and remove items from an array, respectively.
    Arrays have many methods that perform different tasks, such as .slice() and .shift() .
    Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. 
    You can always check the documentation.

    Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. 
    However, a variable declared with const cannot be reassigned.
    Arrays mutated within a function will keep that change even outside the function.
    Arrays can be nested inside other arrays.
    To access elements in nested arrays, chain indices using bracket notation.
*/

// Create an Array 

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions)

const hobbies = ['sleep','eat','sleep']
console.log(hobbies)


// Accessing Elements

const hello = 'Hello World';
console.log(hello[6]); // Output: W


const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0]
console.log(listItem) // Prints: 'Fortune favors the brave.'

console.log(famousSayings[2]) // Prints: 'A joke is a very serious thing.'
console.log(famousSayings[3]) // undefined

let arr = [1,2,3]
console.log(arr[1]) // Prints: 2


// Update Elements


let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); //Output: ['Winter', 'Spring', 'Summer', 'Autumn']

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados'
console.log(groceryList) // Prints: [ 'bread', 'avocados', 'milk' ]



// The .length property


const newYearsResolutions1 = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolutions1.length) // Prints: 2

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); // Prints: 3



// The .push() Method


const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('cook dinner','organize the house')
console.log(chores)
// Output: ['wash dishes','do laundry','take out trash','cook dinner','organize the house']



// The .pop() Method


const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();

console.log(newItemTracker); // Output: [ 'item 0', 'item 1' ]
console.log(removed); // Output: item 2

const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
let popElement=  chores.pop() 
console.log(chores) // Output: [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]
console.log(popElement) // Output:  organize the house


// More Array Methods
// .join()  Elements of an array are converted to strings and concatenated together, returning the resulting string.
// .slice() returns a partial copy of an array, otherwise known as a shallow copy, without altering the original array.
// .splice()
// .shift() method to remove the first item from the array 
// .unshift() Adds one or more elements to beginning of array and returns new length.
// .concat()
// .indexOf() returns the first element that matches the value of the argument passed in. If there isn’t an element whose value matches that of the argument, -1 is returned.


const groceryList1 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// .shift()
groceryList1.shift()
// console.log(groceryList)

groceryList1.unshift('popcorn')
// console.log(groceryList)

// groceryList.slice('bananas', 'coffee beans', 'brown rice')
console.log(groceryList1.slice(1,4))

console.log(groceryList1) // Output: ['popcorn','bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

const pastaIndex = groceryList1.indexOf('pasta')
console.log(pastaIndex) // Prints: 4


// Arrays and Functions


const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}
addFlower(flowers);
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']



const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept) // Output: [ 'arrays', 'can', 'be', 'MUTATED' ]

function removeElement(newArr){
  newArr.pop()
}

removeElement(concept)
console.log(concept) // Output: [ 'arrays', 'can', 'be' ]



// Nested Arrays

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2


const numberClusters = [ [1,2], [3,4], [5,6] ]

const target = numberClusters[2][1]
console.log(target) // Output: 6

