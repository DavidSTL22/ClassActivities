// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let dogsName = "Harley";
let numOfFingers = 10;
let iAmHappy = true;
let phoneNumber = null;
let mousePad;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(
  typeof dogsName,
  typeof numOfFingers,
  typeof iAmHappy,
  typeof mousePad,
  typeof phoneNumber
)
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let randomVariable = `My dog's name is ${dogsName} and I have ${numOfFingers} fingers.`;
console.log(randomVariable);
// reassign the value of the variable that references "null"
phoneNumber = 0;
// print the value and its type
console.log(phoneNumber);
console.log(typeof phoneNumber);

// print a variable that causes a ReferenceError
console.log(mousePads);
// alter the previous line to no longer cause a ReferenceError
console.log(mousePad);
