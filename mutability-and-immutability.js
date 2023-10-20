// immutability
let str1 = "Hello";
let str2 = str1;

str1 = "World";

console.log(str1);
console.log(str2);

// Mutability example with an object
let mutablePerson = {
  name: "John",
  age: 25,
};

// Modifying the object in-place
mutablePerson.age = 26;

console.log("Mutable Person:", mutablePerson);

// Immutability example with an object
let immutablePerson = {
  name: "Jane",
  age: 30,
};

// Creating a new object with the updated age
let updatedImmutablePerson = {
  ...immutablePerson,
  age: 31,
};

console.log("Immutable Person:", immutablePerson);
console.log("Updated Immutable Person:", updatedImmutablePerson);
