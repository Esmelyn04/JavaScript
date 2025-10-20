let fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'
}

console.log(fasterShip.color) // silver

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

let capFav = spaceShip04.crew.captain['favorite foods'][0]

let firstPassenger = spaceShip04.passengers[0]
let firstPassengerName = spaceShip04.passengers[0].name

console.log("")
console.log(capFav) // 'cookies
console.log(firstPassenger) // { name: 'Space Dog'}
console.log(firstPassengerName)// 'Space Dog'


///////////////////////////////////////////////
///////////////////////////////////////////////
// Pass By Reference

let spaceship05 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};


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

console.log("")
for (let crewMember in spaceship06.crew) {
    console.log(`${spaceship06.crew[crewMember].name}: ${spaceship06.crew[crewMember].degree}`)
}


///////////////////////////////////////////////
///////////////////////////////////////////////
// The 'this' Keyword

const goat = {
    dietType: "herbivore",
    makeSound() {
        console.log("baaaa")
    },
    diet() {
        // console.log(dietType) // ReferenceError: dietType is not defined
        console.log(this.dietType) // "this" is need to access others object properties
    }

}

console.log("")
goat.makeSound()
goat.diet()

///////////////////////////////////////////////
///////////////////////////////////////////////
// The 'this' Keyword

const robot = {
    model: "1E78V2",
    energyLevel: 100,

    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    },

    checkEnergy () {
        return `Energy is currently at ${this.energyLevel}%.`
    }
}

console.log("")
console.log(robot.provideInfo())
console.log(robot.checkEnergy())

///////////////////////////////////////////////
///////////////////////////////////////////////
// Getters

// Getters are methods that get and return the internal properties of an object.
// _propertyName. _ underscore indicate this property is not intented to be altered or modify. It's a Privacy property

const person = {
  _firstName: 'John', 
  _lastName: 'Doe',

  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method:
console.log("") 
// console.log(person._firstName) // "John" it works but bc it's privated, the property shouldn't be modify.
person.fullName; // 'John Doe'
console.log(person.fullName) // get method 


///////////////////////////////////////////////
///////////////////////////////////////////////
// Getters

const robot02 = {
  _model: '1E78V2',
  _energyLevel: 100,
 
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log("")
console.log(robot02.energyLevel);

///////////////////////////////////////////////
///////////////////////////////////////////////
// Setters

const person02 = {
    _age: 37,
    get age () {
        if (this._age) {
            return this._age
        } 
    },
    set age(newAge){
        if (typeof newAge === 'number'){
            this._age = newAge;
        } else {
            console.log('You must assing a number to age')
        }
    }
}

console.log("")
// console.log(person02._age) // It works but we create a get method to avoid direct access to obj property.
console.log(person02.age)

// person02._age = 50 // It works but we create a set method to avoid direct access to obj property.
person02.age = 50
console.log(person02.age)

///////////////////////////////////////////////
///////////////////////////////////////////////
// Setters

const robotSet = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }   
  } 
};

console.log("")
robotSet.numOfSensors = 150;
console.log(robotSet.numOfSensors);


///////////////////////////////////////////////
///////////////////////////////////////////////
// Factory Functions

// function that return objects

const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age: age,
        energySource: energySource,
        scare () {
            console.log(catchPhrase)
        }
    }
}
console.log("")
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!')
ghost.scare()

///////////////////////////////////////////////
///////////////////////////////////////////////
// Factory Functions

const robotFactorty = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop')
        }
    }
}

console.log("")
const tinCan = robotFactorty('P-500', true)
tinCan.beep()

///////////////////////////////////////////////
///////////////////////////////////////////////
// Factory Functions

// Property Value Shorthand
// Use destructuring, property value short hand. Assing parameters as properties' name.

const monsterFactory02 = (name, age) => {
    return {
        name: name,
        age: age
    }
}

const monsterFactory03 = (name, age) => { // Property Value Shorthand
    return {
        name,
        age
    }
}

const robotFactoryShort = (model, mobile) => {
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop short hand')
        }
    }
}

console.log("")
const tintinCan = robotFactoryShort('P-500', true)
tintinCan.beep()


///////////////////////////////////////////////
///////////////////////////////////////////////
// Destructured Assignment

const robotDestructured = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop ')
        },
        fireLaser() {
            console.log('Pew Pew')
        }
    }
}

// const functionality = robotDestructured.functionality // traditional way to assing  property value to a variable
const { functionality } = robotDestructured // variable share same name "functionality" with the property, so we can use Destructured assingment
console.log(functionality)
functionality.beep()


///////////////////////////////////////////////
///////////////////////////////////////////////
// Objects Built-in methods

const robotBuildIn = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robotBuildIn) // return obj keys
console.log("")
console.log("robot Keys")
console.log(robotKeys)

const robotEntries = Object.entries(robotBuildIn) // return array of properties keys and values
console.log("")
console.log("robot entries")
console.log(robotEntries)

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robotBuildIn) // create a new copy of object
console.log("")
console.log("new robot")
console.log(newRobot)