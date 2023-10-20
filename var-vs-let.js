// Using var
function exampleVar() {
  if (true) {
    var x = 10;
    console.log("Inside if block (using var):", x);
  }

  console.log("Outside if block (using var):", x); // x is accessible outside the block
}

exampleVar();

// Using let
function exampleLet() {
  if (true) {
    let y = 20;
    console.log("Inside if block (using let):", y);
  }

  // Uncommenting the line below will result in an error
  console.log("Outside if block (using let):", y); // Error: y is not defined
}

exampleLet();
