//Operator performs some operations on a single or multiple operand and produce results.
//Operator:An operand is what operators are applied to
//1. Unary Operator
//2. Binary Operator
//3. Ternary Operator

let x = 5;
x = -x; //unary
//console.log(x)

let y = 30*2; //binary 

//ARITHEMATIC OPERATOR
console.log("ARITHEMATIC OPERATOR");
let a = 10;
let b = 2;
console.log(`Addition of ${a} and ${b} is ${a+b}`)
console.log(`Subtraction of ${a} and ${b} is ${a-b}`)
console.log(`Multiplication of ${a} and ${b} is ${a*b}`)
console.log(`Division of ${a} and ${b} is ${a/b}`)
console.log(`Modulus of ${a} and ${b} is ${a%b}`)
console.log(`Exponent of ${a} and ${b} is ${a**b}`)
console.log();

//ASSIGNMENT OPERATOR
let c = 5; // Assigns 5 to c
c+=3; // Same as x = x + 3
c -= 2; // Same as x = x - 2
c *= 2; // Same as x = x * 2
c /= 2; // Same as x = x / 2
c %= 3; // Same as x = x % 3
c **= 3; // Same as x = x ** 3
//console.log(c);


//INCREMENT/DECREMENT OPERATOR
console.log("INCREMENT/DECREMENT OPERATOR")
let counter=10;
//post increment: first value is returned then its value is increment/decrement.
//pre increment:increment/decrement the value and returns it.

console.log("Returns the actual value:",counter++);
console.log("Post Incremented value:",counter)

console.log("Pre-incremented value:",++counter)
console.log();
//COMMA OPERATOR
let z =(1+2,3+4);
//console.log(z) output:7
//It returns the last expression in the expression list.

//typeof operator: its a unary operator.its place before a value or variable
//it returns the datatype of that value or variable.
console.log(typeof(20))
console.log(typeof 'Hello')
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)