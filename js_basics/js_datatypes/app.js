//1. STRING DATATYPE
//strings are sequence of characters you can use "double quotoes" , 'single quote' , """triplequote"""" and `backticks`

let str1 = "This is string value";
let str2 = `Hello world ${2+3}`; //within the backticks we can pass any expression using ${}
let char = 'a';

console.log(str2);

//2. NUMBER DATATYPE
//It stores both integers and floating points numbers etc.
//it also shows infinity, -infinity and NaN.

let age = 28;
let interestRate = 10.5;

console.log(1/0) //Result is infinity
console.log(-1/0)//Result is -infinity

//3. BOOLEAN DATATYPE 
//It has only 2 types either true or false

let isEligible = 10>15;
console.log(isEligible)

//4. NULL DATATYPE

let gender = null;

//5. UNDEFINED DATATYPE
//when we cannot give any value to the variable, by default it assigned with undefined.

let firstname;
console.log(firstname); //it shows undefined.
