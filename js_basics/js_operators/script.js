//Operator performs some operations on a single or multiple operand and produce results.
//Operator:An operand is what operators are applied to
//1. Unary Operator
//2. Binary Operator
//3. Ternary Operator

let x = 5;
x = -x; //unary
//console.log(x)

let y = 30 * 2; //binary

//ARITHEMATIC OPERATOR
console.log("ARITHEMATIC OPERATOR");
let a = 10;
let b = 2;
console.log(`Addition of ${a} and ${b} is ${a + b}`);
console.log(`Subtraction of ${a} and ${b} is ${a - b}`);
console.log(`Multiplication of ${a} and ${b} is ${a * b}`);
console.log(`Division of ${a} and ${b} is ${a / b}`);
console.log(`Modulus of ${a} and ${b} is ${a % b}`);
console.log(`Exponent of ${a} and ${b} is ${a ** b}`);
console.log();

//ASSIGNMENT OPERATOR
let c = 5; // Assigns 5 to c
c += 3; // Same as x = x + 3
c -= 2; // Same as x = x - 2
c *= 2; // Same as x = x * 2
c /= 2; // Same as x = x / 2
c %= 3; // Same as x = x % 3
c **= 3; // Same as x = x ** 3
//console.log(c);

//INCREMENT/DECREMENT OPERATOR
console.log("INCREMENT/DECREMENT OPERATOR");
let counter = 10;
//post increment: first value is returned then its value is increment/decrement.
//pre increment:increment/decrement the value and returns it.

console.log("Returns the actual value:", counter++);
console.log("Post Incremented value:", counter);

console.log("Pre-incremented value:", ++counter);
console.log();
//COMMA OPERATOR
let z = (1 + 2, 3 + 4);
//console.log(z) output:7
//It returns the last expression in the expression list.

//typeof operator: its a unary operator.its place before a value or variable
//it returns the datatype of that value or variable.
console.log(typeof 20);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log();

//Comparison Operator

let comp1 = 20;
let comp2 = 30;
console.log("COMPARISON OPERATOR");
console.log(`${comp1} is greater than ${comp2} : ${comp1 > comp2}`);
console.log(`${comp1} is less than ${comp2} : ${comp1 < comp2}`);
console.log(
  `${comp1} is greater than or equal to ${comp2} : ${comp1 >= comp2}`
);
console.log(`${comp1} is less than or equal to ${comp2} : ${comp1 <= comp2}`);

//Comparison with string.
console.log("2" > "01"); //2 > 1 = true
console.log("100" < 50); //100 < 50 = false
console.log(true > 5); //1>5 = false
console.log(20 == "20"); //ans=true it will first convert string to number than returns output.
console.log(20 === "20"); //ans= false it follows strict rules string and number is not equal.
console.log(20 != "10"); //same with the case != and !==

console.log("A" < "Z"); // 65 < 90 ASCII value is seen there
console.log("a" < "A"); //97 < 65 = false
console.log("Grass" > "Green"); //97>101 = false
// in this case first G is check with another string if its ame then it moves too next one and compare the values.
console.log("Too" > "To");
// in this case length of the characters is check if both of string have same ascii no.
//console.log(null===undefined)
console.log();

console.log("LOGICAL OPERATORS");
let t = true;
let u = false;
let f = true;
//OR - || it always return first true value of the expression.
console.log(t || u);

//console.log(false||false||false)

//Truthy and Falsy value
//False values are : false,undefined,null,empty string(''),NaN,0
//any other values rather than these 6 falsy values are truthy values.

//AND - && and operator will returns first falsy value from an expression.
//if there is not any falsy value then it will return last value from the expression.
console.log(true && true);
console.log(true && false);

//NOT - !
//it will reverse the value, if true then it reverse and returns false and vice versa.
let n = true;
console.log(!n);

// u can also convert non boolean value to boolean using !!
let o = 100;
console.log(!!o);


//Ternary Operator
let age=20;
let msg = age>=18 ? 'You are eligible for vote' :'You are not eligible for vote'
console.log(msg);