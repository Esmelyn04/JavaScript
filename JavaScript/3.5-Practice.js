// PRACTICE Variable, Data Types, Conditionals and Functions

 
// EX: #1
// CanIVote()
// The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, 
// representing a person’s age, and returns the boolean true if they are 18 years old or older, 
// and the boolean false if they are not.
function canIVote(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
} 
console.log(canIVote(19)) // Print: true
console.log(canIVote(16)) // Print: false

const canIVote2 = function (age) {
    return age >= 18
}
console.log(canIVote2(21)) // Print: true
console.log(canIVote2(14)) // Print: false


const canIVote3 = age => age >= 18

console.log(canIVote3(21)) // Print: true
console.log(canIVote3(15)) // Print: false

///////////////////////////////////////////////////////////////////////////////////////////////////////

// EX: #2
// agreeOrDisagree()
// Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' 
// if the two strings are the same and 'You disagree!' if the two strings are different.

const agreeOrDisagree = function(str1, str2) {
    if (str1 === str2) {
        return 'You agree!'
    } else {
        return 'You disagree!'
    }
}
console.log(agreeOrDisagree("yep", "yep"))    // Prints: You agree!
console.log(agreeOrDisagree('wow', 'Wow'))    // Prints: You disagree!
console.log(agreeOrDisagree('hola', 'hola'))  // Prints: You agree!
console.log(agreeOrDisagree('hola', 'hello')) // Prints: You disagree!

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ex: #3
// lifePhase()

/* 
Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.
Here are the classifications:
    - 0-3 should return 'baby'
    - 4-12 should return 'child'
    - 13-19 should return 'teen'
    - 20-64 should return 'adult'
    - 65-140 should return 'senior citizen'
All of the ranges are inclusive of the beginning and ending numbers. 
If the age is less than 0 or greater than 140, the function should return 'This is not a valid age'.

*/

function lifePhase(age) {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age <= 3){
        return 'baby'
    } else if (age <= 12){
        return 'child'
    } else if (age <= 19){
        return 'teen'
    } else if (age <= 64){
        return 'adult'
    } else {
        return 'senior citizen'
    }
}
console.log(lifePhase(5)) //should print 'child'
console.log(lifePhase(0)) //should print 'baby'


////////////////////////////////////////////////////////////////////////////////////////////////

// EX: #4
// finalGrade()

/*
Write a function, finalGrade(). It should:

- take three number arguments
- return 'You have entered an invalid grade.', if any of the three grades are less than 0 or greater than 100
- otherwise, find the average of those three numbers
- return the letter grade (as a string) that the average corresponds to

- Assuming all the grades are valid, return a single letter representing the final grade based on the following scale:
    0–59 should return: 'F'
    60–69 should return: 'D'
    70–79 should return: 'C'
    80–89 should return: 'B'
    90–100 should return: 'A'
*/

function finalGrade(num1, num2, num3){
    if ((num1 < 0 || num2 < 0|| num3 < 0)){
        return 'You have entered an invalid grade.'
    }
    if ((num1 > 100|| num2 > 100 || num3 > 100)){
        return 'You have entered an invalid grade.'
    }
    let average = (num1 + num2 + num3)/3
    console.log(average)

    if (average < 60){
        return 'F'
    }else if (average < 70){
        return 'D'
    }else if (average < 80){
        return 'C'
    }else if (average < 90){
        return 'B'
    }else {
        return 'A'
    }
}
console.log(finalGrade(99, 92, 95)) // Prints: 'A'
console.log(finalGrade(99, 70, 95)) // Prints: 'B'
console.log(finalGrade(75, 70, 75)) // Prints: 'C'
console.log(finalGrade(100, 100, -90)) // Prints: 'You have entered an invalid grade.'


// #2
function finalGrade2(grade1, grade2, grade3){

 if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
  return 'You have entered an invalid grade'
  }

  let average = Math.floor((grade1 + grade2 + grade3) / 3)
  console.log(average)
  if (average < 60){
    return "F"
  } else if (average < 70) {
    return "D"
  } else if (average < 80) {
    return "C"
  } else if (average < 90){
    return "B"
  } else {
    return "A"
  }
 
}

////////////////////////////////////////////////////////////////////////////////////////////////

// EX: #5
// reportingForDuty()
/*

Write a function, reportingForDuty(), that has two string parameters, 
 - rank and lastName, and returns a string in the following format: <RANK> <LASTNAME> reporting for duty!.
 - Replace <RANK> with the value of the rank argument and <LASTNAME> with the value of the lastName argument
*/

function reportingForDuty(rank, lastName){
    return `${rank} ${lastName} reporting for duty!`
}

console.log(reportingForDuty('Capital', 'Soto'))

////////////////////////////////////////////////////////////////////////////////////////////////

// EX: #6
// rollTheDice()

/*
 - We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. 
 - It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?
*/

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
}

console.log(rollTheDice())

////////////////////////////////////////////////////////////////////////////////////////////////

// EX: #7
// calculateWeight()

/*
Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. 
Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

- take two parameters: earthWeight and planet
- expect earthWeight to be a number
- expect planet to be a string
- return a number representing what that Earth-weight would equate to on the planet passed in

- The final weight should be calculated based on the following:
    - 'Mercury' weight = earthWeight * 0.378
    - 'Venus' weight = earthWeight * 0.907
    - 'Mars' weight = earthWeight * 0.377
    - 'Jupiter' weight = earthWeight * 2.36
    - 'Saturn' weight = earthWeight * 0.916
For any other planetary inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
*/

function calculateWeight(earthWeight, planet){
    let weight = 0
    if (planet === 'Mercury'){
        weight = earthWeight * 0.378
        return weight
    } else if (planet === 'Venus'){
        weight = earthWeight * 0.907
        return weight
    } else if (planet === 'Mars'){
        weight = earthWeight * 0.377
        return weight
    } else if (planet === 'Jupiter'){
        weight = earthWeight * 2.36
        return weight
    } else if (planet === 'Saturn'){
        weight = earthWeight * 0.916
        return weight
    } else {
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}

console.log(calculateWeight(100, 'Venus'))   // Prints: 6
console.log(calculateWeight(180, 'Mercury')) // Prints: 90.7    
console.log(calculateWeight(100, 'Jupiter')) // Prints: 68.04
console.log(calculateWeight(100, 'Moon'))    // prints: 236


////////////////////////////////////////////////////////////////////////////////////////////////

// EX: #8
// truthyOrFalsy()

/*

It can be hard to keep track of what’s truthy or falsy in JavaScript. 
Write a function, truthyOrFalsy(), that takes in any value and 
returns true if that value is truthy and false if that value is falsy.
*/

function truthyOrFalsy(value){
    if (value) {
        return true
    } else {
        return false
    }
}

console.log(truthyOrFalsy(0)) // Prints: false
console.log(truthyOrFalsy(1)) // Prints: true
console.log(truthyOrFalsy("hola")) // Prints: true
console.log(truthyOrFalsy(null)) // Prints: false

////////////////////////////////////////////////////////////////////////////////////////////////

// EX: #9
// numImaginaryFriends()

/*
A person’s number of imaginary friends is always 25% (or 1/4) of their total friends.

 - Write a function, numImaginaryFriends(), that takes in the total number of friends a person has 
   and returns the number of imaginary friends they have.
 - Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.
 - The JavaScript Math.ceil() function will come in handy.
*/

// Function Declaration
function numImaginaryFriends(num) {
    return Math.ceil(num/4)
}

// Function Expression
const numImaginaryFriends2 = function(num) {
    return Math.ceil(num/4)
}

// Arrow Function
const numImaginaryFriends3 = (num) => {
    return Math.ceil(num/4)
}

// Inline Arrow Function
const numImaginaryFriends4 = num => Math.ceil(num/4)


console.log(numImaginaryFriends(10)) // Prints: 3
console.log(numImaginaryFriends2(8)) // Prints: 2
console.log(numImaginaryFriends3(15)) // Prints: 4
console.log(numImaginaryFriends4(19)) // Prints: 5


////////////////////////////////////////////////////////////////////////////////////////////////

// EX: #10
// sillySentence()

/* 
Write a function, sillySentence(), that has three string parameters and returns the following silly sentence 
with the blanks filled in by the arguments passed into the function:

You can check the silly sentence by calling the function like this:
    - sillySentence('excited', 'love', 'functions'); 

// Should return 'I am so excited because I love coding! Time to write some more awesome functions!'

*/

function sillySentence(word1, word2, word3){
    return `I am so ${word1} because I ${word2} coding! Time to write some more awesome ${word3}`
}

console.log(sillySentence('excited', 'love', 'functions'))


////////////////////////////////////////////////////////////////////////////////////////////////

// EX: #11
// whatRelation()

// Fix the broken code (round 2)!

/*
Given the percentage of DNA shared between two people, you can calculate their likely familial relationship.

We wrote a function, whatRelation(), that has one number parameter, percentSharedDNA, and returns the likely relationship. 
We expect the number passed in to always be an integer from 0 to 100, but for some reason, it’s not working!

Here’s how it’s supposed to calculate the relationship:

    - 100 should return 'You are likely identical twins.'
    - 35-99 should return 'You are likely parent and child or full siblings.'
    - 14-34 should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    - 6-13 should return 'You are likely 1st cousins.'
    - 3-5 should return 'You are likely 2nd cousins.'
    - 1-2 should return 'You are likely 3rd cousins.'
    - 0 should return 'You are likely not related.'
Unfortunately, it’s not working how we want!
*/

const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins.'
    }
    
    return 'You are likely not related.'
}

console.log(whatRelation(34))
// Prints: 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
console.log(whatRelation(3))
// Prints: 'You are likely 2nd cousins.'
console.log(whatRelation(1))
// Prints: 'You are likely 3rd cousins'

////////////////////////////////////////////////////////////////////////////////////////////////

// EX: #12
// tipCalculator()

/*
Create a function, tipCalculator(), that has two parameters — a string representing the quality of 
the service received and a number representing the total cost.

Return the tip amount, as a number, based on the following quality index:

    - 'bad' should return a 5% tip
    - 'ok' should return a 15% tip
    - 'good' should return a 20% tip
    - 'excellent' should return a 30% tip
    - any other quality inputs should default to an 18% tip
    - For example, this should return 20.
        tipCalculator('good', 100)


*/


function tipCalculator(quality, total) {
  switch (quality){
    case 'bad':
      return (total * 5) / 100;
      break;
    case 'ok':
      return (total * 15) / 100;
      break;
    case 'good':
      return (total * 20) / 100;
      break;
    case 'excellent':
      return (total * 30) / 100;
      break;
    default:
      return (total * 18) / 100;
      
  }
}

console.log(tipCalculator('good', 100)) //should return 20
console.log(tipCalculator('ok', 150)) //should return 20
