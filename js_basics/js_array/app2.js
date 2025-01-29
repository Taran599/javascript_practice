//ARRAY METHODS AND PROPERTIES
let names = ['tutti','futti','sutti','lutti'];

//length - returns the total elements in array

// let size = names.length;
// console.log(size)
console.log(names.length);

let arr = [];
arr[50] = 20;
//console.log(arr[5]) we dont have any element in arr[5],so it returns undefined
console.log(arr[50]);
console.log(arr.length);//it returns higher index+1

//clear the array without using any mmethod
//pass the length = 0, the array will be empty
let numbers = [1,2,3,4,5];
console.log(numbers)

numbers.length=2;
console.log(numbers)

numbers.length = 5;
console.log(numbers)

let name = ['tutti','futti','sutti','lutti'];

//push - It insert an element at the end of the array
name.push('hutti')

//pop - it is used to remove an element from the end of the array and return it 
//name.pop();
name.pop();

//unshift - It insert an element at the beginning of the array
name.unshift('gutti')

//shift - it is used to remove an element from the start of the array
name.shift();
console.log(name)

//indexOf - it returns the index of an element in the array else -1
let index = name.indexOf('sutti');
console.log(index);