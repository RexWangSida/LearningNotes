# NodeJS
- Single Threaded, Asynchronous, all users share a single thread server

## Command line
- `node filename.js` or `node filename` to run a JS file

## Import modules with require function
```Javascript
const path = require('path'); // path is a node module

console.log(`The filename is ${path.basename(__filename)}`); 
// __filename : current file path
// __dirname : current directory path
