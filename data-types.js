// primitive data type
var bool = true;
let string = "my string";
const myNumber = 200;
let empty = null;

console.log(bool);
console.log(string);
console.log(myNumber);
console.log(empty);
console.log(typeof myNumber);

// non primitive data type
var myArr = [1, 2, 3, "aaa"];

console.log(myArr);
console.log(myArr[0]);
console.log(myArr[myArr.length - 1]);

var myArrStr = myArr.toString();
console.log(myArrStr);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

console.log(person);
console.log(person.age);
console.log(person["age"]);
console.log(person[0]);
