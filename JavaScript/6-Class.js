class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() { // getter function
      return this._name;
    }
    
    get remainingVacationDays() { // getter function
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) { // method
      this._remainingVacationDays -= daysOff;
    }
    
    static generatePassword() { // static method. Accessed only directly from it's own class. Can not be called from any inherit or child class 
      return Math.floor(Math.random() * 10000);
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name); // super has to be call first in order inside the constructor to prevent any referent error
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays); // prints: 5

  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications); // prints: [ 'Trauma', 'Pediatrics', 'Genetics' ]
  
  // EXTRA PRACTICE
  class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
      super(name)
      this._insurance = insurance
    }
  }
  