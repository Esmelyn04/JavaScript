let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

let runnerAge = 20;

if (runnerAge >= 18 && registeredEarly) {
  raceNumber += 1000
}
 


if (runnerAge >= 18 && registeredEarly) {
  console.log(`runner number ${raceNumber} will run at 9:30 am`)
} else if (runnerAge >= 18 && !registeredEarly) {
  console.log(`runner number ${raceNumber} will run at 11:00 am`)
} else if (runnerAge < 18) {
  console.log(`runner number ${raceNumber} will run at 12:30 pm`)
} else {
  console.log('Please see the registration desk')
}
