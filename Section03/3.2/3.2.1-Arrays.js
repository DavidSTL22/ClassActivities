// create an Array using an Array literal
const testArray = [4, "Hello", null, [true, 45, "green"], false];
// access the 1st item in the Array
//testArray [0];
// access the last item in the Array
//testArray[3];
// print the length of the Array
//testArray.length;
// use the length property to access the last item in the Array
//testArray[testArray.length - 1];
// with for...of, loop over the Array, modify the value and add to a different Array

let diffPotato;
let diffArray = [];

for (let potato of testArray){
  let newPotato = potato + 1;
  diffPotato += " " + newPotato;
  diffArray[potato] = newPotato;
}

console.log("This is the different potato: ", diffPotato);
console.log("This is the different Array: ", diffArray);
