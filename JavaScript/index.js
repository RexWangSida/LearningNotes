//javascript code can be seperated from html

console.log('Hello World')

//declare variable
let name = 'Hello World';
console.log(name);
const one = 1;
console.log(one);

//object
let person = {
    name : 'Rex',
    age : 22
};
console.log(person);
//change properties of object
person.name = 'Tom';
console.log(person.name);
person['name'] = 'Kris';
console.log(person['name']);

//array
let colors = [];
colors[0] = "red";
console.log(colors);
console.log(colors.length)

//function
function greet(name){
    console.log('Hello' + name);
}
greet('John');
greet('Charles');
