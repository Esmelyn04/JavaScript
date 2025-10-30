/*
    Async Await


    * async...await is syntactic sugar built on native JavaScript promises and generators.

    * We declare an async function with the keyword async.

    * Inside an async function, we use the await operator to pause execution of our function until an asynchronous action completes 
      and the awaited promise is no longer pending.

    * await returns the resolved value of the awaited promise.

    * We can write multiple await statements to produce code that reads like synchronous code.
      
    * We use try...catch statements within our async functions for error handling.

    * We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen concurrently whenever possible.


 */



/*
    Introduction

    Check out the code we provided. It shows three ways of accomplishing the same task: 
    reading and printing from two files in a specified order:

    * The first version uses callback functions.
    * The second version uses native promise syntax.
    * The third version uses async...await.

*/


const fs = require('fs');
const promisifiedReadfile = require('./10-Asynchronus/promisifiedReadfile');
      
// Here we use fs.readfile() and callback functions:
fs.readFile('./10-Asynchronus/file.txt', 'utf-8', (err, data) => {                          // * The first version uses callback functions.
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./10-Asynchronus/file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence
promisifiedReadfile('./10-Asynchronus/file.txt', 'utf-8')                                   // * The second version uses native promise syntax.
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./10-Asynchronus/file2.txt', 'utf-8');
  })
  .then((data) => {
    let secondSentence = data;  
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

// Here we use promisifiedReadfile() again but instead of using the native 
// promise .then() syntax, 
// we declare and invoke an async/await function:
async function readFiles() {                                                                // * The third version uses async...await.
  let firstSentence = await promisifiedReadfile('./10-Asynchronus/file.txt', 'utf-8');
  let secondSentence = await promisifiedReadfile('./10-Asynchronus/file2.txt', 'utf-8');
  console.log(firstSentence, secondSentence);
}

readFiles();

//////////////////////////////////////////////////////////////////////////

// The async Keyword 

// create async function declaration
async function myFunc() {
  // Function body here
};
myFunc();


// create async function expressions:
const myFunc1 = async () => {
  // Function body here
};
myFunc1();



// async functions always return a promise. This means we can use traditional 
// promise syntax, like .then() and .catch, with our async functions. 

async function fivePromise() { 
  return 5;
}

// fivePromise() is a promise with a resolved value of 5.
fivePromise()
  .then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5

/////////////////////////////////////////////////////////////////////////////
// Rewrite Promise function as an async function

  function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});

// Write your code below:
async function withAsync(num){
  if (num === 0){
      return 'zero';
    } else {
      return 'not zero';
    }
}

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
});

////////////////////////////////////////////////////////
// The await Operator

// The await keyword can only be used inside an async function. await is an operator.
// It returns the resolved value of a promise.
// await halts, or pauses, the execution of our async function until a given promise is resolved.

const brainstormDinner = require('./10-Asynchronus/library.js');


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`); // meal 'beans' is the resolve 
  });
}
// nativePromiseDinner()

// Prints: 
// Should I make salad...?
// Should I make ramen...?
// Should I make eggs...?
// Should I make chicken...?
// I'm going to make beans for dinner.


// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner()
  console.log(`I'm going to make ${meal} for dinner.`) // meal 'beans' is the resolve 
  
}

announceDinner()

// Prints: 
// Should I make salad...?
// Should I make ramen...?
// Should I make eggs...?
// Should I make chicken...?
// I'm going to make beans for dinner.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Writing async Functions

/*
    * await keyword halts the execution of an async function until a promise is no longer pending.
    * Don’t forget the await keyword! It may seem obvious, but this can be a tricky mistake to catch 
      because our function will still run — it just won’t have the desired results.
*/

let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}

async function noAwait() {
 let value = myPromise();
 console.log(value);
}

async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!


/**
 * Log '1. Heading to the store to buy beans...' to the console.
 * 
 * Capture the resolved value of the promise returned when we invoke shopForBeans().
 
 * The promise returned from shopForBeans() prints a string in the format 
    '2. I bought [the resolved type of beans] beans because they were on sale.'

 * Finally, the function prints a string in the format 
    '3. Great! I'm making [the bean type] beans for dinner tonight!' to the console.

 */

const shopForBeans = require('./10-Asynchronus/library2.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

// Prints:
// 1. Heading to the store to buy beans...
// 2. I bought garbanzo beans because they were on sale.
// 3. Great! I'm making ${value} beans for dinner tonight!


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Handling Dependent Promises

/*
    * The true beauty of async...await is when we have a series of asynchronous actions that depend on one another.
*/

// With native promise syntax, we use a chain of .then()functions, making sure to return correctly each one:

function nativePromiseVersion() {
  returnsFirstPromise()
    .then((firstValue) => {
      console.log(firstValue);
      return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
      console.log(secondValue);
    });
}

// Here’s how we’d write an async function to accomplish the same thing:

async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}

/**
 *  We require in three functions: shopForBeans(), soakTheBeans(), and cookTheBeans(). These functions each return a promise.
 * 
 *  1 - shopForBeans() expects no arguments and returns a promise that will resolve to a string representing a type of bean.
 * 
 *  2 - soakTheBeans() expects a string representing a type of bean as an argument and returns a promise that resolves to a 
 *      boolean value, indicating whether or not the beans are softened.
 * 
 *  3 - cookTheBeans() expects a boolean as an argument and, if that value is true, returns a promise which will resolve to a 
 *      string announcing that dinner is ready.
 */

const {shopForBeans1, soakTheBeans, cookTheBeans} = require('./10-Asynchronus/library3.js');

// Write your code below:
async function makeBeans() {
  let type = await shopForBeans1()
  let isSoft = await soakTheBeans(type)
  let dinner = await cookTheBeans(isSoft)
  console.log(dinner)
}

makeBeans()

// Prints:
// I bought pinto beans because they were on sale.
// Time to soak the beans.
// ... The Pinto beans are softened.
// Time to cook the beans.
// ... The beans are cooked!


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Handling Errors

/**
 * With async...await, we use try...catch statements for error handling. 
 * By using this syntax, not only are we able to handle errors in the same way 
 * we do with synchronous code, but we can also catch both 
 * synchronous and asynchronous errors. This makes for easier debugging!
 * 
 */

async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
//    console.log(err);
   console.log('Error from usingTryCatch()')
 }
}

usingTryCatch();

// Remember, since async functions return promises 
// we can still use native promise’s .catch() with an async function.

async function usingPromiseCatch() {
   let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})


// For convenience, we’ve been working with a lot of promises that will never be rejected, but this isn’t very realistic!

const cookBeanSouffle = require('./10-Asynchronus/library4.js');

async function hostDinnerParty() {
 try {
   let dinner = await cookBeanSouffle();
   console.log(`${dinner} is served!`);
 }
 catch(error){
//    console.log(error);
   console.log('Error from hostDinnerParty()')
   console.log('Ordering a pizza!');
 }
}

hostDinnerParty();

// Prints
// Fingers crossed... Putting the Bean Souffle in the oven
// Bean Souffle is served!


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Handling Independent Promises

/*
 What if our async function contains multiple promises that are not dependent on the results of one another to execute?

 * In the waiting() function, once that resolves, we print both resolved values to the console.
 *
 * In our concurrent() function, both promises are constructed without using await.
 * We then await each of their resolutions to print them to the console.
 * With our concurrent() function, both promises’ asynchronous operations can be run simultaneously.
*/

async function waiting() {
  const firstValue = await firstAsyncThing();
  const secondValue = await secondAsyncThing();
  console.log(firstValue, secondValue);
}

async function concurrent() {
  const firstPromise = firstAsyncThing();
  const secondPromise = secondAsyncThing();
  console.log(await firstPromise, await secondPromise);
}


///////////////////////////////////


let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./10-Asynchronus/library5.js')

async function serveDinner() {

 const vegetablePromise = steamBroccoli();
 const starchPromise = cookRice();
 const proteinPromise = bakeChicken();
 const sidePromise = cookBeans();

 console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner();

// Prints: Dinner is served. We're having broccoli, rice, chicken, and beans.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Await Promise.all()

/*
 Another way to take advantage of concurrency when we have multiple promises 
 which can be executed simultaneously is to await a Promise.all().

 We can pass an array of promises as the argument to Promise.all(), and it will return a single promise. 
 This promise will resolve when all of the promises in the argument array have resolved. 

 */

 async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}


///////////////////////////////////


let {cookBeans2, steamBroccoli2, cookRice2, bakeChicken2} = require('./10-Asynchronus/library6.js')

// Write your code below:
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans2()]); 
  
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}

serveDinnerAgain();

// Prints: Dinner is served. We're having broccoli, rice, chicken, and beans.
