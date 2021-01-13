# NodeJS
- Single Threaded, Asynchronous, all users share a single thread server

## Command line
- `node filename.js` or `node filename` to run a JS file

## [Globals](https://nodejs.org/api/globals.html)
### Import modules with require function
```Javascript
const path = require('path'); // path is a node module

console.log(`The filename is ${path.basename(__filename)}`); 
// __filename : current file path
// __dirname : current directory path
```
### process
```Javascript
console.log(process.pid); //current process id
console.log(process.versions.node); //current node version
console.log(process.argv); //arguments array, first is node path, second is current file path, the third and later elements are command line arguments
```
### setTimeout
```Javascript
const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => console.log("done");
setTimeout(timerFinished, waitTime); // first argument is the callback function, which will be called when time elapsed, second argument is the waiting time in ms.
