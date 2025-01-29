let student = ['taran',28,'male',123456,true,{name:'tuffy',age:10}];//new array()
let value = student[2]//accessing array element
student[3]=456789//manipulating array element

console.log(student);
console.log(value);

let user = new Array('admin','READWRITE','IT');

console.log(user[1]);
user[1]='READONLY';
console.log(user);

//let numbers = new Array(10,20,30);
let numbers = new Array(10);//single number is considered as size of the array
console.log(numbers);