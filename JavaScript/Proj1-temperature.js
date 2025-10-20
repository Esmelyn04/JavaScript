// Constant kelvin equal to temperature 293
const kelvin = 0;
console.log(kelvin);

// Convert kelvin to celsius
// FORMULA: celcius = kelvin - 273
let celsius = kelvin - 273;
console.log(celsius);

// Convert celsius to fahrenheit
// FORMULA: Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32
console.log(fahrenheit)

// round decimal number with Math.floor()
fahrenheit = Math.floor(fahrenheit)
console.log(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Convert to Newton
let newton = celsius * (33/100)

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);


