//let user = 'Rose'

let user = 'Rose';
let x = 11;

//any code that is  created inside the code block can only accessed inside that code block.
if(x>10){
    let y = x++;
    console.log(y);
}

function greetings(name,timeOfDay){
    const msg = `Good ${timeOfDay} ${name}.Welcome back!`
    console.log(msg);
    console.log(user);
}
//console.log(msg); -> it generate error because the scope of local variiable is inside the function
greetings('Rose','Evening')