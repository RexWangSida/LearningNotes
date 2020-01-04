## Connect JS to HTML
suppose there is a JS file named `main.js` and it is supposed to be connected to the following html
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="./main.js">
    </script>
  </head>
  <body>
    
  </body>
</html>
```

## Syntax
- ### alert
pop up a window with a string in the browser
```Javascript
alert("Hello World!");
```
- ### prompt
pop up a window to get a string as input
```Javascript
var value = prompt("Enter a value: ");
```
- ### Comment
same as most languages
```Javascript
// this is a line of comment
```
- ### Calculation
others same, division in JS is true division
```Javascript
2/5;   //result is 0.4
```
- ### Strings
```Javascript
"Js".length;   // gives the length of the 
"Js" + "Ok";   // concatenate two strings
"Js"[0];       // index
```
- ### Variable
declare a variable using keyword `var` and initialize it
```Javascript
var bankAccount = 100;
```
- ### Console Output
```Javascript
console.log("Hi");
```
- ### Type Conversion
Js supports auto type conversion when doing comparison with `==`, `===` will check for type equality
```Javascript
"1" == 1;   //true
"1" === 1;  //false
```

