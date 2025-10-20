/*
Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!
*/

let input = 'turpentine and turtles'

const vowels = ['a','e','i','o','u']

let resultArray = []

// loops through the input
for (i=0; i < input.length; i++) {
  // console.log(input[i])
  // console.log(i)

  // add an extra 'e' or 'u' when the input[i] is equal to one of these vowels
  // if (input[i] === 'e') {
  //   resultArray.push(input[i])
  // }
  // if (input[i] === 'u') {
  //   resultArray.push(input[i])
  // }

  // Refactor conditional function 
  // add an extra 'e' or 'u' when the input[i] is equal to one of these vowels
  if (input[i] === 'e' || input[i] === 'u' ) {
    resultArray.push(input[i])
  }

  for(j=0; j < vowels.length; j++) {
    // console.log(j)

    // when a vowel is found in the input, add it to the result Array
    if (input[i] === vowels[j]) {
      // console.log(input[i])
      resultArray.push(input[i])
    }
  }
}

// resultArray is equal to the vowels found in the input string
console.log(resultArray)

// join the resultArray together into a String
let resultString = resultArray.join(' ')
console.log(resultString)

// captitalize the result
resultString = resultString.toUpperCase()
console.log(resultString)
