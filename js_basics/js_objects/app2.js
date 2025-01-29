let user = {
    name : 'taran',
    yearOfBirth: 2004,
    isMarried: false,
calculateAge: function(){
return 2024 - this.yearOfBirth
}
};

let name = user.name;
let age = user.calculateAge();
console.log(age);