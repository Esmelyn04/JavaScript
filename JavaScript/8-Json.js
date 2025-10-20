


// Ready Json file


const jsonData = '{ "book": { "name": "JSON Primer", "price": 29.99, "inStock": true, "rating": null } }';
// Convert Json to object
// JSON.parse()
const jsonObject = JSON.parse(jsonData)

console.log(jsonObject)
// {
//  book: { name: 'JSON Primer', price: 29.99, inStock: true, rating: null }
// }

console.log(jsonObject.book)
 // { name: 'JSON Primer', price: 29.99, inStock: true, rating: null }
console.log(jsonObject.book.name)
// JSON Primer
console.log(jsonObject.book.price)
// 29.99


for (const key in jsonObject.book) {
    console.log(key + " : " + jsonObject.book[key])
}
// name : JSON Primer
// price : 29.99
// inStock : true
// rating : null



/* EXERCISE #1

1 - Create a variable called jsObject that is an object parsed from jsonData.

2 - Print out the array of all the children property nested in jsObject. 
Be sure to use either bracket notation or dot notation to access the nested properties.

*/
console.log("Exercise #1")
const jsonData2 = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';

const jsObject2 = JSON.parse(jsonData2)

console.log(jsObject2.parent.children)
// [ { name: 'Kim', age: 3 }, { name: 'Lee', age: 1 } ]
console.log(jsObject2["parent"]["children"])
//[ { name: 'Kim', age: 3 }, { name: 'Lee', age: 1 } ]




// Write Json File


const jsObject3 = { book: 'JSON Primer', price: 29.99, inStock: true, rating: null };
// Convert Object to JSON
//JSON.stringify()
const jsonData3 = JSON.stringify(jsObject3);

console.log(jsonData3);
// { "book": "JSON Primer", "price": 29.99, "inStock": true, "rating": null }


/* EXERCISE #2

As a developer, you receive some data in the form of a JSON string in the variable, jsonData.
However, the content of jsonData is not completely correct. The age value of the parent property should be 35 instead of 45. 
Without changing the content of jsonData directly, update the age value and then log a new JSON string with the correct value in the console.

Here is a step-by-step guide to solve this challenge:

    1 - Convert jsonData to a JavaScript object using JSON.parse() and save it as a const variable, for instance, jsObject.

    2 - Use either the dot, .key, or bracket, ['key'], notation to access the parent property of jsObject followed by the age property and change its value from 45 to 35.

    3 - Convert jsObject back to a JSON string using JSON.stringify() and save it as another const variable, for instance, jsObjectToJson.

    4 - Log the jsObjectToJson string on the console.

*/
console.log("EXERCISE #2")
const jsonData4 = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';

// convert from json to object
const jsonObject4 = JSON.parse(jsonData4)
console.log(jsonObject4)

// update age property value from 45 to 35
jsonObject4.parent.age = 35
console.log(jsonObject4)

// convert from Obecjt to Json
jsObjectToJson = JSON.stringify(jsonObject4)
console.log(jsObjectToJson)

