/*
    Advanced Objects

    - The object that a method belongs to is called the calling object.
    - The this keyword refers to the calling object and can be used to access properties of the calling object.
    - Methods do not automatically have access to other internal properties of the calling object.
    - The value of this depends on where the this is being accessed from.
    - We cannot use arrow functions as methods if we want to access other internal properties.
    - JavaScript objects do not have built-in privacy — however, there are conventions to follow to notify other developers about the intent of the code.
    - The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
    - Setter and getter methods allow for more detailed ways of accessing and assigning properties.
    - Factory functions allow us to create object instances quickly and repeatedly.
    - There are different ways to use object destructuring: one way is the property value shorthand, and another is destructured assignment.
    - As with any concept, it is a good skill to learn how to use the documentation with objects!

*/

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
goat.makeSound() // Output: baaaa
goat.diet() // Output: herbivore

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
console.log(robot.provideInfo()) // Output: I am 1E78V2 and my current energy level is 100.
console.log(robot.checkEnergy()) // Output: Energy is currently at 100%.

///////////////////////////////////////////////
///////////////////////////////////////////////
// Arrow => Functions and this.

// Arrow fct does not have access to the calling object properties.

const robot2 = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  },
  checkEnergyArrow: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`) // this.energyLevel is undefined using arrow function
  }
}

console.log("")
robot2.checkEnergy(); // Output: Energy is currently at 100%.
console.log(robot2.energyLevel ) // 100
robot2.checkEnergyArrow() // Output: Energy is currently at undefined%.




///////////////////////////////////////////////
///////////////////////////////////////////////
// Privacy

// underscore (_) before the name of a property means that the property should not be altered.

// In the example below, the _amount is not intended to be directly manipulated.
const bankAccount = {
  _amount: 1000
}

// Even so, it is still possible to reassign _amount:
bankAccount._amount = 1000000;


//Ex:
const robot3 = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

console.log("")
robot3.recharge() // Output: Recharged! Energy is currently at 130%.

robot3._energyLevel = 'high'
robot3.recharge() // Output: Recharged! Energy is currently at high30%.




///////////////////////////////////////////////
///////////////////////////////////////////////
// Getters

// Getters are methods that get and return the internal properties of an object.
// _propertyName. _ underscore indicates this property is not intended to be altered or modified. It's a Privacy property

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
// console.log(person._firstName) // "John" it works, but bc it's private, the property shouldn't be accessed directly.

person.fullName; // get method return 'John Doe'
console.log(person.fullName) // Output: 'John Doe'


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
console.log(robot02.energyLevel); // Output: My current energy level is 100

///////////////////////////////////////////////
///////////////////////////////////////////////
// Setters

// Setter methods reassign values of existing properties within an object.

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
// console.log(person02._age) // It works, but we create a get method to avoid direct access to obj property.
console.log(person02.age) // Output: 37

// person02._age = 50 // It works, but we create a set method to avoid direct access to obj property.
person02.age = 50
console.log(person02.age) // Output: 50

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
console.log(robotSet.numOfSensors) // Output: 15

robotSet.numOfSensors = 150;
console.log(robotSet.numOfSensors); // Output: 150


///////////////////////////////////////////////
///////////////////////////////////////////////
// Factory Functions

// function that returns objects

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
ghost.scare() // Output: BOO!

///////////////////////////////////////////////
///////////////////////////////////////////////
// Factory Functions

// Create instances of an object quickly with functions

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
tinCan.beep() // Output: Beep Boop

///////////////////////////////////////////////
///////////////////////////////////////////////
// Factory Functions

// Property Value Shorthand
// Use destructuring, property value shorthand. Assign parameters as the properties' name.

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
tintinCan.beep() // Output: Beep Boop short hand


///////////////////////////////////////////////
///////////////////////////////////////////////
// Destructured Assignment

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

console.log("")
const residence1 = vampire.residence; // traditional way to assing  property value to a variable
console.log(residence1); // Prints: 'Transylvania'

const { residence } = vampire; // variable shares the same name "residence" with the property, so we can use Destructured assignment
console.log(residence); // Prints: 'Transylvania'

const { day } =vampire.preferences // We can even use destructured assignment to grab nested properties of an object:
console.log(day)// Prints: 'stay inside' 




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

console.log("")

const functionality1 = robotDestructured.functionality // traditional way to assign  property value to a variable
console.log(functionality1) // Output: { beep: [Function: beep], fireLaser: [Function: fireLaser] }

const { functionality } = robotDestructured // variable share same name "functionality" with the property, so we can use Destructured assignment
console.log(functionality) // Output: { beep: [Function: beep], fireLaser: [Function: fireLaser] }
functionality.beep() // Prints: 'Beep Boop'


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
console.log(robotKeys) // Output: [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

const robotEntries = Object.entries(robotBuildIn) // return array of properties keys and values
console.log("")
console.log("robot entries")
console.log(robotEntries)
//Output: [
//   [ 'model', 'SAL-1000' ],
//   [ 'mobile', true ],
//   [ 'sentient', false ],
//   [ 'armor', 'Steel-plated' ],
//   [ 'energyLevel', 75 ]
// ]

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robotBuildIn) // create a new copy of object
console.log("")
console.log("new robot")
console.log(newRobot)
// Output: {
//   laserBlaster: true,
//   voiceRecognition: true,
//   model: 'SAL-1000',
//   mobile: true,
//   sentient: false,
//   armor: 'Steel-plated',
//   energyLevel: 75
// }
