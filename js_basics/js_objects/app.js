//let user = (); ()-> new object()
//let user =  new Object();
let user = {
    name :'taran',
    age: 28
};
console.log(user);
console.log(user.name);
console.log(user.age);

user.gender = 'male'
user['gender'] = 'female'
delete user.age
console.log(user);