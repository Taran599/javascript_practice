//do-while loop

let i = 1;
const user = ['steve','ella','mark','bella'];
//STEP1: Create a variable and initialize it.
//STEP2: Increment/Decrement variable value.
//STEP3: Provide a condition for while loop.

// do{
//     console.log("value of i is:" + i++);
// }
// while(i<=10)

let index = 0;
do{
    console.log(user[index]);
    index++;
}while(index<user.length)