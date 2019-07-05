//javascript code can be seperated from html

console.log('Hello World')

//declare variable, let and const provides "block scope" in addition to global and function scope
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
console.log(colors.length);

//array sort and reverse
colors.sort();
colors.reverse();

//function
function greet(name){
    console.log('Hello' + name);
}
greet('John');
greet('Charles');

func = function() {
  return "Another one";
}
console.log(func());

//arrow functions
arrow1 = () => {
  return "Arrow function1";
}
console.log(arrow1());

arrow2 = () => "Arrow function2";
console.log(arrow2());

arrow3 = (val) => "Arrow function" + val;
console.log(arrow3('3'));

arrow4 = val => "Arrow function" + val;
console.log(arrow4('4'));

//for/while loops are the same as in java

//class
class Car{
    constructor(brand){
        this.brand = brand;    
    }
    getBrand(){
        return this.brand;
    }
}
car = new Car("Ford");
console.log(car);
console.log(car.brand);
console.log(car.getBrand());
