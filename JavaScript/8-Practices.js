// PRACTICE Arrays, Loops, Objects, Iterators

// EX.1
// reverseArray()

/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.
There’s a built-in array method called .reverse() that does a lot of this work for you, but you’re NOT allowed to use it here!
*/

const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}

// Alternate solutions:

// Using the .unshift() method
const reverseArray1 = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}

// As a function declaration:
function reverseArray2(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}

const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)); // Prints: [ 'This', 'will', 'all', 'make', 'sense.' ]

const reverseSentence = sentence.reverse() 
console.log(reverseSentence) // Prints: [ 'This', 'will', 'all', 'make', 'sense.' ]


//****************************************************************************************************************************
// EX.2
// greetAliens()

/*
Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print 
a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”

Note: You may have noticed how convenient it would be to use .forEach(), but 
you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

*/
console.log('EX.2')

const greetAliens = arr => {
      for (let i = 0; i < arr.length; i++) {
            console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
      }
}


const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens)
// Prints:
// Oh powerful Blorgous, we humans offer our unconditional surrender!
// Oh powerful Glamyx, we humans offer our unconditional surrender!
// Oh powerful Wegord, we humans offer our unconditional surrender!
// Oh powerful SpaceKing, we humans offer our unconditional surrender!

const greetAliens2 = aliens.forEach(word => console.log(`Oh powerful ${word}, we humans offer our unconditional surrender!`))
// Prints:
// Oh powerful Blorgous, we humans offer our unconditional surrender!
// Oh powerful Glamyx, we humans offer our unconditional surrender!
// Oh powerful Wegord, we humans offer our unconditional surrender!
// Oh powerful SpaceKing, we humans offer our unconditional surrender!


//****************************************************************************************************************************
// EX.3
// convertToBaby()

/*
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, 
returns a new array with each string in the array prepended with 'baby '.

Note: You may have noticed how convenient it would be to use .map(), but you’re not allowed to use it here. 
Don’t worry you’ll have plenty of opportunities to use built-in methods later on!
*/
console.log('EX. 3')

const convertToBaby = arr => {
      const babyArray = [];
      for (let i = 0; i < arr.length; i++) {
            babyArray.push('baby ' + arr[i]);
      }
      return babyArray
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))
// Prints:
// [
//   'baby panda',
//   'baby turtle',
//   'baby giraffe',
//   'baby hippo',
//   'baby sloth',
//   'baby human'
// ]

const convertToBaby2 = animals.map( animal => {
    return `The baby ${animal}`
} )

console.log(convertToBaby2)
// Prints:
// [
//   'The baby panda',
//   'The baby turtle',
//   'The baby giraffe',
//   'The baby hippo',
//   'The baby sloth',
//   'The baby human'
// ] 

//****************************************************************************************************************************
// EX.4
// smallestPowerOfTwo()

/*
We wrote a function, smallestPowerOfTwo(), which should take in an array and return the lowest power of 2 
that is greater than or equal to each number in that array. A power of two is any value 2n where n is a non-negative integer (including 0). 
The list of powers of 2 for non-negative integers starts with [1, 2, 4, 8, 16, 32, 64,...] where 20=1, 21=2, 22=4, and so on.

For example, if the array were:
const myArray = [6, 2, 11, 50];

Then the smallestPowerOfTwo() function should return the following array
[ 8, 2, 16, 64 ]


*/

console.log('EX. 4')

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop:
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop:
            // We needed to create a new variable!
            let j = 1;
            while (j < number) {                
                  j = j * 2;
                  console.log(j)          
            }
            
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 

//****************************************************************************************************************************
// EX.5
// declineEverything() and acceptEverything()

// Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.
// The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().
// You can test your function when you’re ready by passing in the veggies array or by making your own array!

// Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, 
// by logging to the console in the following format: 'Ok, I guess I will eat some [element].'
// You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array!


console.log('EX. 5')

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Checkpoint 1 solutions:
const declineEverything = arr => {
  arr.forEach(politelyDecline)
}
console.log(declineEverything(veggies))

// Prints:
// No broccoli please. I will have pizza with extra cheese.
// No spinach please. I will have pizza with extra cheese.
// No cauliflower please. I will have pizza with extra cheese.
// No broccoflower please. I will have pizza with extra cheese.


/*
// As a function declaration:
function declineEverything(arr) {
      arr.forEach(politelyDecline)
}
*/


// Checkpoint 2 solutions:
// Using an anonymous function and string interpolation:
const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
}

console.log(acceptEverything(veggies))

// Prints:
// Ok, I guess I will eat some broccoli.
// Ok, I guess I will eat some spinach.
// Ok, I guess I will eat some cauliflower.
// Ok, I guess I will eat some broccoflower.

/*
// Using a named function and string concatenation:
const grudginglyAccept = veg => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}
const acceptEverything = arr => {
      arr.forEach(grudginglyAccept)
}

// Using a loop:
const acceptEverything = arr => {
 for(let i = 0; i<arr.length; i++){
    console.log(`Ok, I guess I will eat some ${arr[i]}.`)
 }
}
*/


//****************************************************************************************************************************
// EX.6
// squareNums()

/*
Write a function, squareNums(), that takes in an array of numbers and, using .map(), 
returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the numbers array or by making your own array!
*/

const numbers1 = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare)

console.log(squareNums(numbers1))

// Prints:
// Output:
// [ 4, 49, 81, 29241, 2704, 1089, 196 ]

/*
// Using an anonymous function:
const squareNums = arr => arr.map(e => e * e)

// As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare)
}
*/

//****************************************************************************************************************************
// EX.7
// shoutGreetings()

/*
Write a function shoutGreetings() that takes in an array of strings and returns a new array. 
This new array should contain all the strings from the argument array but with capitalized letters 
and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!
*/

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

console.log(shoutGreetings(greetings))

// Prints: 
// [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]


/*
// As a function declaration AND using a loop:
function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}
*/


//****************************************************************************************************************************
// EX.8
// sortYears()

/*
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, 
returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the years array or by making your own array of years!
*/

const sortYears = arr => arr.sort((x, y) => y - x);

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))

// Prints:
// [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

/*
// As a function declaration AND using a named function:
function sortYears(arr) {
      const checkYears = (year1, year2) => year2 - year1
      return arr.sort(checkYears)
}
*/

//****************************************************************************************************************************
// EX.9
// justCoolStuff()

/*
Write a function justCoolStuff() that takes in two arrays of strings, and, 
using the built-in .filter() method, 
returns an array with the items that are present in both arrays.

        let arr1 = ['this', 'not this', 'nor this'];
        let arr2 = ['thing 1', 'thing 2', 'this'];

        justCoolStuff(arr1, arr2); // Should return ['this']

You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!

*/

const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))


let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

console.log(justCoolStuff(arr1, arr2))

// Prints:
// [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
// [ 'this' ]


/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/


//****************************************************************************************************************************
// EX.10
// isTheDinnerVegan()

/*
Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

    {name: 'cabbage', source: 'plant' }

and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

    const meal = [{name: 'arugula', source: 'plant'}, 
                {name: 'tomatoes', source: 'plant'}, 
                {name: 'lemon', source:'plant'}, 
                {name: 'olive oil', source: 'plant'}];

isTheDinnerVegan(meal); // Should return true

You can test your function when you’re ready by passing in the dinner array or by making your own!
*/


const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

/*
// Alternate solution:
// Using a function declaration, loop, and helper function:
function isTheDinnerVegan(arr) {
      const isVegan = (food) => {
            if (food.source === 'plant') {
                  return true;
            }
            return false;
      }
      for(let i = 0; i<arr.length; i++){
            if (!isVegan(arr[i])){
                  return false 
            }
      }
      return true
}
*/

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner)) // return false

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

console.log(isTheDinnerVegan(meal)) // return true


//****************************************************************************************************************************
// EX.10
// sortSpeciesByTeeth()

/*
Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

    {speciesName: 'shark', numTeeth: 50 }

and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, 
or use an anonymous function for your argument to .sort().

You can test your function when you’re ready by passing in the speciesArray array or by making your own!
*/

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

/*
// As a function declaration AND using a named function:
function sortSpeciesByTeeth(arr) {
      const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
      return arr.sort(compareTeeth)
}
*/

console.log(sortSpeciesByTeeth(speciesArray))

// Prints: 
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]


//****************************************************************************************************************************
// EX.11
// findMyKeys()

/*
Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. 
If the keys are in the array, your function should return the index at which they can be found. 
If they’re not in the array, your function should return -1.

const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);
// Should return -1

You can use any technique you want to accomplish this task. Though, if you look, 
there’s a built-in method that will make pretty quick work of it.

You can test your function when you’re ready by passing in the randomStuff array 
or by making your own array!

*/

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

/*
// Alternate solution:
// As a function declaration using a loop:
function findMyKeys(arr) {
      let index = -1;
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'keys') {
                  index = i
                  break
            }
      }
      return index
}
*/
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
console.log(findMyKeys(randomStuff)) // 4

const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
console.log(findMyKeys(drawer)) // -1


//****************************************************************************************************************************
// EX.12
// dogFactory()

/*
1. Write a function, dogFactory(). It should:

 - have 3 parameters: name, breed, and weight (in that order)
 - expect name and breed to be strings
 - expect weight to be a number
 - return an object
 - have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }


2. Add getters and setters for each of the three properties and change 
   the property names to have an underscore prepended.

3. Add two methods to your object: .bark() which returns ‘ruff! ruff!’ 
   and .eatTooManyTreats() which should increment the weight property by 1.
*/

// Final solution:
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,

        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    }
}
const dog1 = dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

console.log(dog1)
//  Prints: 

// {
//   _name: 'Joe',
//   _breed: 'Pug',
//   _weight: 27,
//   name: [Getter/Setter],
//   breed: [Getter/Setter],
//   weight: [Getter/Setter],
//   bark: [Function: bark],
//   eatTooManyTreats: [Function: eatTooManyTreats]
// }


/*
// Solution to checkpoint 1:
const dogFactory = (name, breed, weight) => {
      return {
            name: name,
            breed: breed,
            weight: weight
      }
}

// Solution to checkpoint 2:
const dogFactory = (name, breed, weight) => {
      return {
            _name: name,
            _breed: breed,
            _weight: weight,
            get name() {
                  return this._name;
            },
            set name(newName) {
                  this._name = newName;
            },
            get breed() {
                  return this._breed;
            },
            set breed(newBreed) {
                  this._breed = newBreed;
            },
            get weight() {
                  return this._weight;
            },
            set weight(newWeight) {
                  this._weight = newWeight;
            }
      }
}

*/
