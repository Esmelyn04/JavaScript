// promisifiedReadfile function is need to execute the promise function example in 10-Asynchronus.js file.

const fs = require('fs'); // require() import the file system module 'fs'

// Below we create a function for reading files that returns a promise. We converted the fs.readfile() function which uses callbacks. 
// Many of the asynchronous functions you'll encounter already return promises, so this extra step is seldom necessary. 

const promisifiedReadfile = (file, encoding) => 
  new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, text) => {
			if (err) {
				return reject(err.message);
      }
        resolve(text);
      });
});

module.exports = promisifiedReadfile