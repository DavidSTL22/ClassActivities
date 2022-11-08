// Named Parameters

// write a function that takes two named parameters:
function testFunction(x, y, ...z){
  // print each named parameter
  console.log(x);
  console.log(y);
  console.log(z);
  // then return the parameters added together
  return x + y;
}

//console.log(testFunction(5));
// invoke the function and pass in two numbers
//testFunction(2, 20);
// invoke the function and pass in more than two numbers
//testFunction(4, 5, 6);
// invoke the function and pass in only one number
//testFunction(5);
// change the function to set default values for the parameters
// (x = 1, y = 2);
// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers

console.log(testFunction(5, 10, 15, 20, 25));
