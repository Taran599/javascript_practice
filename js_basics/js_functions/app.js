//defining the function
function greetings(name){
    const msg = 'Good morning '+ name +' , welcome back!';
    console.log(msg);
}
//calling the function
greetings('aman');
greetings('taran');

//alert is a function which do not return anything but prompt is a function thyat returns either string or null.
function addition(num1,num2){
let sum = num1+num2;
return sum;
}
const add = addition(20,30);
console.log(add)

function checkEligiblity(age){
    if(age>=18){
        return true
    }else{
        return false;
    }
}
console.log(checkEligiblity(20))
console.log(checkEligiblity(15))

function allowVoting(age){
    if(checkEligiblity(age)){
        return;
    }
    console.log("Please cast your vote!")
}
allowVoting(20);