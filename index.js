/* Use a extension call Live Server and enable auto save to sync code
 changes in the browser faster.

Just type doc to generate basic HTML. */

// 1 Script Tags

//<script src="index.js"></script> <= At the bottom of the body.

// 2 Console Output

//console.log("Hello World");

// 3 Variables

/* Three ways to crate variables => var, let, const
var is global so we are not using it now.
let can reassign
const is constants */ 

// 4 Data Types

/* primitive data types => String, Number, Boolean, null, undefined, Symbol 
console.log(typeof(variableName))
 */

// 5 Strings & String Methods

/* Concatenation
    'String 1' + var + 'String 2' <= old way
    `String 1 ${var} String 2` <= This is not ', it is `*/

/* String Methods
    String s = 'Hello';
    s.length();
    There are lot of String methods. */

// 6 Arrays

/* const number = new Array(1,2,3,4,5); <= not use often
const number = [1,2,3,4,5,'StringValue'];
number.push('New Element');
There are lot of Array methods. */


// 7 Object Literals

// Construct an object 
/* const person = {
    firstName : 'John',
    lastName : 'Doe',
    hobbies : ['music', 'movies'],
    address : {
        street : '5 Cabot',
        city : 'Boston'
    }
}
 */
//Distract an object
//const {firstName, lastName} = person; //<= Take element out from an object as variables.
//const {firstName, lastName, address : {city}} = person;

//person.email = 'email@test.com'; <= Can add new elements like this.

// 8 Arrays Of Objects & JSON

/* const listOfPersons = [
    {
    firstName : 'John',
    lastName : 'Doe',
    hobbies : ['music', 'movies'],
    address : {
        street : '5 Cabot',
        city : 'Boston'
    }
},
{
    firstName : 'John',
    lastName : 'Does',
    hobbies : ['music', 'movies'],
    address : {
        street : '5 Cabot',
        city : 'Boston'
    }
}
]
 */
/* convert Objects to json
    const personJson = JSON.stringify(listOfPersons);
    console.log(personJson); */


// 9 Loops

/* // For
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While
let i = 0;
while (i<10) {
    console.log(`while loop ${i}`);
    i++;
}

// for of
for (const iterator of object) {
    
} */

// 10 High Order Array Methods
// forEach, map, filter

/* listOfPersons.forEach(function(person){
    console.log(person.address);
});

const address = listOfPersons.map(function(person){
    console.log(person.address);
});

const filteredPerson = listOfPersons.filter(function(p){
    return p.lastName.length === 4;
}).map(function(person){
    return person.lastName;
});

console.log(filteredPerson); */

// 11 Conditionals
//if else if else
/* const x = 10;

if (x == 10) { // == => dose not match the data type 
               // === => match data type as well 
    console.log('x is 10');
} else {
    console.log('x is not 10');
} */

// Can use else if as well
// Multiple condition => || && 
// Turnery operators
    //const color = x > 10 ? 'red' : 'blue';

// switch 
/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */
  
// 12 Functions

/* function addNumbers(num1, num2){
    return num1 + num2;
} */

// 13 Arrow Functions
/* const addNumber = (i,j) => {
    return i + j;
} */
//const addNum = (i,j) => i + j;
//If only one line no {} needed. Also return statement is valid only with {}

// 14 Constructor Functions & Prototypes

/* function Person(firstName, lastName, dob){ //P Caps 
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);//'8-9-1988' is a date object, we can use date methods on it.
    // can add functions 
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
} */

// Instantiate object
/* const person1 = new Person('John', 'Doe', '1988-9-9');
console.log(person1.firstName);
console.log(person1.getBirthYear()); */

// Prototype
/* Person.prototype.getBirthYear = function() {
    return this.getFullYear();
}  //we can define this under the above Person class and remove it from 
the class. */

// 15 ES6 Classes



// 16 Window Object & DOM
// 17 DOM Selection
// 18 Manipulating The DOM
// 19 Events
// 20 Form Script