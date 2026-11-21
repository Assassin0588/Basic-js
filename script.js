document.getElementById("btn").onclick = () => {
    alert("Hello World");
}
const alertFunction = () => {
    alert("Hello World");
}
// let fllName;
//     fllName = "Awais"
//     console.log(fllName);
// let firstName = "Awais";
// let lastName = "Sohail";
// let fullName =firstName+" "+lastName;
// console.log(fullName);
// Datatypes
// String
let name = "Awais";
console.log(name);
// Number
let age = 18;
console.log(age);
// Boolean
let isStudent = true;
console.log(isStudent);
// Null
let isStudet = null;
console.log(isStudet);
// Undefined
let isUndefined = undefined;
console.log(isUndefined);
// Object
let person = {
    name: "Awais",
    age: 18,
    isStudent: true
};
console.log(person);
// Array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
// Function
let add = (a, b) => {
    console.log(a + b);
}
add(1, 2);
console.log(add(1, 2),add);

// Increment operator
let x = 1;
y = x++

// At this time the value of y is 1 because code
// read from left to right and first we declare
//  the value of y to x and later we use increment
//  operator and the value of x become 2 this 
// method is called postfix
 
y = ++x
 
// this time both operators value become 2 and 
// this method is called prefix

// Decrement operator

y = x--
y = --x

let z = prompt("Enter your name");
console.log(z);
alert("good morning "+z);
