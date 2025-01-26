//if statement
// syntax:
// if(condition){
//     //If-block code
// }
//let age = prompt("Enter your age: ")
if (age >= 18) {
  console.log("You are eligible for voting!");
}
console.log("Thanks for voting!");

//if-else statements
// syntax:
// if(condition){
//     //If-block code
// } else {
//else-block code
//}

//let age2 = prompt("Enter your age: ")
if (age2 >= 18) {
  console.log("You are eligible for voting!");
}
else{
console.log("You are not eligible for voting!");
}

//if-else ladder
let marks = prompt("Enter your marks out of 100");
if(marks>=90){
    console.log("Grade A")
}
else if(marks>=80 && marks<=90){
    console.log("Grade B")
}
else if(marks>=70 && marks<=80){
    console.log("Grade c")
}
else{
    console.log("grade c")
}