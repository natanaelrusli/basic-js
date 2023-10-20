console.log("For loop");
// Print numbers from 1 to 5 using a for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("\n");

console.log("While loop");
// Print numbers from 1 to 5 using a while loop
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

console.log("\n");

console.log("Do While loop");
// Print numbers from 1 to 5 using a do-while loop
let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 0);
console.log("\n");

console.log("Iterate over elements");
// Iterate over elements of an array using for...of loop
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
