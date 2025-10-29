/**
 * 
 * Review: Classes
 * 
 * Classes are templates for objects
 * JavaScript calls a constructor method when we create a new instance of a class.
 * Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
 * We use the extends keyword to create a subclass.
 * The super() method calls the constructor() of a parent class.
 * Static methods are called on the class, but not on instances of the class.
 * 
 * In completing this lesson, you’ve taken one step closer to writing efficient, production-level JavaScript. 
  Good luck as you continue to develop your skills and move into intermediate-level concepts.

  If you want extra practice with inheritance, take some time to create a Doctor class 
  that inherits from HospitalEmployee. The properties and methods for the Doctor class are listed below:

  Doctor
    * Properties: _name, _remainingVacationDays, _insurance
    * Methods: .takeVacationDays()
 
  
 */



class HospitalEmployee {
    constructor(name) { // JavaScript calls the constructor() method every time it creates a new instance of a class.
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() { // getter method
      return this._name;
    }
    
    get remainingVacationDays() { // getter method
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) { // method
      this._remainingVacationDays -= daysOff;
    }
    
    static generatePassword() { // static method. Accessed only directly from its own class. Can not be called from any inherited or child class 
      return Math.floor(Math.random() * 10000);
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name); // super has to be called first in order inside the constructor to prevent any referent error
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']); // create an instance of the class Nurse

  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays); // prints: 15

  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications); // prints: [ 'Trauma', 'Pediatrics', 'Genetics' ]
  
  // EXTRA PRACTICE
  /*
  If you want extra practice with inheritance, take some time to create a Doctor class 
  that inherits from HospitalEmployee. The properties and methods for the Doctor class are listed below:

  Doctor
    * Properties: _name, _remainingVacationDays, _insurance
    * Methods: .takeVacationDays()
  */
  class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
      super(name)
      this._insurance = insurance
    }
  }

  const doctorSoto = new Doctor('Soto', 'AAA')
  console.log(Object(doctorSoto)) // Prints: Doctor { _name: 'Soto', _remainingVacationDays: 20, _insurance: 'AAA' }
  
