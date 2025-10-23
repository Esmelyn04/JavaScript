/*
    Higher-Order Functions and ITERATORS


        *Higher-Order Function Review

            Great job! By thinking about functions as data and learning about higher-order functions, you’ve taken important steps 
            in learning to write clean, modular code that takes advantage of JavaScript’s flexibility.
            
            - Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.
            - We can work with functions the same way we work with any other type of data, including reassigning them to new variables
            - JavaScript functions are first-class objects, so they have properties and methods like any other object.
            - Functions can be passed into other functions as parameters.
            - A higher-order function is a function that either accepts functions as parameters, returns a function, or both.


        *Iterators Review

            How to use JavaScript documentation from the Mozilla Developer Network to discover 
            and understand additional methods. Let’s review!.

            - .forEach()    is used to execute the same code on every element in an array, but does not change the array and returns undefined.
            - .map()        executes the same code on every element in an array and returns a new array with the updated elements.
            - .filter()     checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
            - .findIndex()  returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfy the condition.
            - .reduce()     iterates through an array and takes the values of the elements and returns a single value.
            - All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.
            - You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).
*/

// Function as Data

// JavaScript functions behave like any other data type in the language — we can assign functions 
// to variables, and we can reassign them to new variables.

const announceThatIAmDoingImportantWork = () => { // function name is long. It's hard to read and understand
    console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork; 
busy(); // This function call barely takes any space!

console.log("")
/////////////////////////////////////////////////////////////////////

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => { 
  console.log("Hello")
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
  console.log('I just count to one million')
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes; // declare a shorter-named variable isTwoPlusTwo that will be easier to work with.

isTwoPlusTwo()  // Prints: 'Hello
                // Then
                // Prints: 'I just count to one million'
console.log(isTwoPlusTwo.name); // Prints: checkThatTwoPlusTwoEqualsFourAMillionTimes

console.log('')
/////////////////////////////////////////////////////////////////////
// Functions as Parameters

const higherOrderFunc = param => {
//   param();
  console.log(param()) // Prints: I'm being invoked by the higher-order function!
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

// higherOrderFunc(anotherFunc);
console.log(higherOrderFunc(anotherFunc)) // Prints: I'm being invoked by the higher-order function!
                                          // Then
                                          // Prints: I just invoked anotherFunc as a callback function!

console.log('')
// anonymous function(a function without a name) can be arguments too.
higherOrderFunc(() => {
  for (let i = 0; i <= 5; i++){
    console.log(i);
  }
});
// Prints:
// 0
// 1
// 2
// 3
// 4
// undefined

//////////////////////////////////

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2
  const checkB = func(val)

  if (checkA === checkB) {
    return checkB
  } else {
    return 'inconsistent results'
  }

}

console.log(checkConsistentOutput(addTwo,10)); // Prints: 12



console.log('')
 /////////////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////////////////
 console.log('ITERATORS')
 console.log('')

 // Iterators 

 // Built-in array methods take a callback function and 
 // execute the same code for each element of an array

// Notice the different methods being called on the arrays:
// .forEach()
// .map()
// .filter()

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});
// Prints:
// Picasso is one of my favorite artists.
// Kahlo is one of my favorite artists.
// Matisse is one of my favorite artists.
// Utamaro is one of my favorite artists.  


const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);
// Prints: [ 1, 4, 9, 16, 25 ]


const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
// Prints: [ 5, 3.14, 100 ]


console.log('')

////////////////////////////////////
// The .forEach() Method

// .forEach() will execute the same code for each element of an array.

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts']


groceries.forEach(function(groceryItem){ // CallBack function expression 
    console.log(' - ' + groceryItem)
})
// Prints:
//  - brown sugar
//  - salt
//  - cranberries
//  - walnuts

console.log('')
groceries.forEach(groceryItem => { // CallBack arrow function 
    console.log(` ** ${groceryItem}`)
})
// Prints:
//  ** brown sugar
//  ** salt
//  ** cranberries
//  ** walnuts


console.log('')
// groceries.forEach(groceryItem => console.log(` - ${groceryItem}`))
groceries.forEach(groceryItem => console.log(groceryItem)); // CallBack inline arrow function
// Prints:
//  brown sugar
//  salt
//  cranberries
//  walnuts



// We can also define a function beforehand to be used as the callback function.
console.log('')
function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);
// Prints:
//  brown sugar
//  salt
//  cranberries
//  walnuts


const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

console.log('')
// Iterate over fruits below
 fruits.forEach(fruits => console.log(`I want to eat a ${fruits}`))

 // Prints:
// I want to eat a mango
// I want to eat a papaya
// I want to eat a pineapple
// I want to eat a apple

console.log('')

////////////////////////////////////
// The .map() Method

// When .map() is called on an array, it takes an argument of a callback function 
// and returns a new array! Take a look at an example of calling

const numbers1 = [1, 2, 3, 4, 5]; 

const bigNumbers1 = numbers1.map(number => {
  return number * 10;
});

console.log(numbers1) // Prints: [ 1, 2, 3, 4, 5 ]
console.log(bigNumbers1) // Prints: [ 10, 20, 30, 40, 50 ]

console.log('')

/////////////////////////////////
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animals => {
  return animals[0]
})

console.log(secretMessage)
// Prints:
// [
//   'H', 'e', 'l', 'l',
//   'o', 'W', 'o', 'r',
//   'l', 'd'
// ]
console.log(secretMessage.join('')); // Prints: 'HelloWorld'

console.log('')
/////////////////////////////////

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(bigNumbers => {
  return bigNumbers / 100
})

console.log(smallNumbers) // Prints: [ 1, 2, 3, 4, 5 ]

const smallNumbers2 = bigNumbers.map(numbers => {
  return numbers / 10
})
console.log(smallNumbers2) // Prints: [ 10, 20, 30, 40, 50 ]


console.log('')

////////////////////////////////////
// The .filter() Method

// .filter() returns an array of elements after filtering out 
// certain elements from the original array.

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

console.log('')

//////////////////////

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNumbers3 = randomNumbers.filter(randomNumbers => {
  return randomNumbers < 250
})
console.log(smallNumbers3) // Prints: [ 200, 3.14, 7, 13 ]


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(favoriteWords => {
  return favoriteWords.length > 7
})
console.log(longFavoriteWords) // Prints: [ 'nostalgia', 'hyperbole', 'esoteric' ]

console.log('')

////////////////////////////////////
// The .findImdex() Method

// Calling .findIndex() on an array will return the index of the first element 
// that evaluates to true in the callback function.

// If there isn’t a single element in the array that satisfies the condition in the callback, 
// then .findIndex() will return -1.

const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen); // Output: 3 
console.log(jumbledNums[3]); // Output: 5

console.log('')

////////////////////////
const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1

console.log('')

///////////////////////
const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animals1.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal) // Prints: 7
console.log(animals1[foundAnimal]) // Prints: 'elephant'


const startsWithS = animals1.findIndex(animal => {
  return animal[0] === 's';
});
console.log(startsWithS)// Prints: 3
console.log(animals1[startsWithS]) // Prints: seal
console.log(animals1[3]) // Prints: seal

console.log('')

////////////////////////////////////
// The .reduce() Method

// The .reduce() method returns a single value after iterating through the elements of an array, 
// thereby reducing the array.

// .reduce() takes two parameters, accumulator and currentValue.
// The accumulator starts off as the value of the first element in the array.
// The currentValue starts as the second element.

const numbers4 = [1, 2, 4, 10];

const summedNums = numbers4.reduce((accumulator, currentValue) => { // 
  return accumulator + currentValue
})
// Iteration	accumulator	    currentValue	  return value
// First	    1	              2	              3
// Second	    3	              4	              7
// Third	    7	              10	            17

console.log(summedNums) // Output: 17

// The .reduce() method can also take an optional second parameter to set an initial value for the accumulator
const numbers5 = [1, 2, 4, 10];

const summedNums1 = numbers5.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums1); // Output: 117

console.log('')

////////////////////
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);
// Prints:

// The value of accumulator:  10
// The value of currentValue:  1
// The value of accumulator:  11
// The value of currentValue:  3
// The value of accumulator:  14
// The value of currentValue:  5
// The value of accumulator:  19
// The value of currentValue:  7
// 26

console.log('')

//////////////////////////////////////
// Choose the Right Iterator

// There are many iteration methods to choose from. In addition to learning the correct syntax 
// for using iteration methods, it is also important to learn how to choose the correct method for different scenarios.

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// Prints:
// Have you visited Orlando?
// Have you visited Dubai?
// Have you visited Edinburgh?
// Have you visited Chennai?
// Have you visited Accra?
// Have you visited Denver?
// Have you visited Eskisehir?
// Have you visited Medellin?
// Have you visited Yokohama? 

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);
console.log(longCities) // Prints: [ 'Edinburgh', 'Eskisehir', 'Medellin', 'Yokohama' ]

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word) // Prints: CODECADEMY

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);
console.log(smallerNums)
// Prints:
// [
//    -4,  45,  70, 195,
//   345, 520, 995
// ]


// Choose a method that will return a boolean value
console.log(nums.every(num => num < 0)) // Prints: false
// OR
console.log(nums.some(num => num < 0)) // Prints: false
