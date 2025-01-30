//do-while loop

let i = 1;
const user = ["steve", "ella", "mark", "bella"];
//STEP1: Create a variable and initialize it.
//STEP2: Increment/Decrement variable value.
//STEP3: Provide a condition for while loop.

// do{
//     console.log("value of i is:" + i++);
// }
// while(i<=10)

let index = 0;
do {
  console.log(user[index]);
  index++;
} while (index < user.length);

//FOR LOOP

// for(let x = 1;x<=10;x++){
//     console.log("Value of i is:" +i);
// }
let a = 1;//Initialization
const names = ['taran','charan','kujan','deepakshi','saneha']
for (let a = 0;a < user.length;a++){
    console.log(user[a]);
}

//Break and Continue

//BREAK
// let y =1;

// while(y<=10){
//     if(y==5){
//         break; break out of loop explicitly.
//     }
//     console.log('Value of y is:' +y);
//     y++;
// }

//CONTINUE
for (let i =0;i<10;i++){
    if(i%2===0){
    continue;//used to skip any statement.
    }
    console.log(i)
}