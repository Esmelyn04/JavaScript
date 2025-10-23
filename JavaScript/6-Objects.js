/*
    Objects
	
    Way to go! You’re well on your way to understanding the mechanics of objects
    in JavaScript. By building your own objects, you will have a better understanding of how 
    JavaScript built-in objects work as well. You can also start imagining organizing your code 
    into objects and modeling real-world things in code.

    Let’s review what we learned in this lesson:

    - Objects store collections of key-value pairs.
    - Each key-value pair is a property — when a property is a function, it is known as a method.
    - An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
    - We can access, add, or edit a property within an object by using dot notation or bracket notation.
    - We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
    - We can navigate complex, nested objects by chaining operators.
    - Objects are mutable — we can change their properties even when they’re declared with const.
    - Objects are passed by reference — when we make changes to an object passed into a function, those changes are permanent.
    - We can iterate through objects using the for...in syntax.

*/
// Creating Object Literals

let spaceship1 = {}; // spaceship is an empty object

// An object literal with two key-value pairs
let spaceship2 = {
  'Fuel Type': 'diesel',
  color: 'silver'
};


// Accessing Properties

let spaceship3 = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship3.homePlanet; // Returns 'Earth'
spaceship3.color; // Returns 'silver'


///////////////////////////////////////////////
///////////////////////////////////////////////

let spaceship = {
    homePlaner: "Earth",
    color: "silver",
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
}

let crewCount = spaceship.numCrew
let planetArray = spaceship.flightPath  

console.log(crewCount) // 5
console.log(planetArray) // [ 'Venus', 'Mars', 'Saturn' ]


///////////////////////////////////////////////
///////////////////////////////////////////////
// Bracket Notation

let spaceship02 = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

spaceship02['Active Duty'];   // Returns true
spaceship02['Fuel Type'];   // Returns 'Turbo Fuel'
spaceship02['numCrew'];   // Returns 5
spaceship02['!!!!!!!!!!!!!!!'];   // Returns undefined

let returnAnyProp = (objectName, propName) => objectName[propName]; // working with functions
returnAnyProp(spaceship02, 'homePlanet'); // Returns 'Earth'

let propName = 'Active Mission'
let isActive = spaceship02['Active Mission']

 console.log(isActive)  // true
 console.log(spaceship02[propName]) // true
 console.log(spaceship02['Active Mission']) //true


///////////////////////////////////////////////
///////////////////////////////////////////////
// Property Assignment

let spaceship03 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship03.color = 'glorious gold' // change value of property color
spaceship03.numEngines = 5 // create a new key 'numEngines' and assign value of 5

console.log(spaceship03.color) // 'glorious gold'
console.log(spaceship03.numEngines) // 5

delete spaceship03['Secret Mission'] // delete property
console.log(spaceship03['Secret Mission']) // undefined


///////////////////////////////////////////////
///////////////////////////////////////////////
// Methods

const alienShop = {
    invade () {
        // console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
        return 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
    }
}

// alienShop.invade()
console.log("")
console.log(alienShop.invade()) // 'Hello! we have come...'

///////////////////////////////////////////////
///////////////////////////////////////////////
// Methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
    retreat() {
        console.log(retreatMessage)
    },

    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!')
    }
}
console.log("")
alienShip.retreat() // 'We no longer...'
alienShip.takeOff() // 'Spim...'

///////////////////////////////////////////////
///////////////////////////////////////////////
// Nested Objects

let spaceShip04 = {
    passengers: [{name: 'Space Dog'}],
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    engine: {
        model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
}

let capFave = spaceShip04.crew.captain['favorite foods'][0]

let firstPassenger = spaceShip04.passengers[0]
let firstPassengerName = spaceShip04.passengers[0].name

console.log("")
console.log(capFave) // 'cookies
console.log(firstPassenger) // { name: 'Space Dog'}
console.log(firstPassengerName)// 'Space Dog'

let keys = Object.keys(spaceship) 
console.log(keys)                       // Output:[ 'passengers', 'telescope', 'crew', 'engine', 'nanoelectronics' ]
spaceship.crew.captain.encourageTeam()  // Output: We got this! 


///////////////////////////////////////////////
///////////////////////////////////////////////
// Pass By Reference

let spaceship05 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// update object with functions
let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil' 
}
let remotelyDisable = obj => {
    obj.disable = true
}

greenEnergy(spaceship05)
remotelyDisable(spaceship05)

console.log("")
console.log(spaceship05['Fuel Type']) // avocado oil
console.log(spaceship05.disable)   // true


///////////////////////////////////////////////
///////////////////////////////////////////////
// Looping through Objects for...in

let spaceship06 = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
};

console.log("")
for (let crewMember in spaceship06.crew ) {
    // console.log(crewMember)
    console.log(`${crewMember}: ${spaceship06.crew[crewMember].name}`)

}
// Output:
// captain: Lily
// chief officer: Dan
// medic: Clementine
// translator: Shauna

console.log("")
for (let crewMember in spaceship06.crew) {
    console.log(`${spaceship06.crew[crewMember].name}: ${spaceship06.crew[crewMember].degree}`)
}
// Output:
// Lily: Computer Engineering
// Dan: Aerospace Engineering
// Clementine: Physics
// Shauna: Conservation Science


