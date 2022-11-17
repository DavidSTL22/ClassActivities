// select the root node
const main = document.querySelector('.main-content');
const body = document.querySelector('body');
// select the last child of the root node
console.log(main.lastElementChild);
// select all the children of the body element
console.log(body.children);
// select the next sibling of the h2 node
console.log(document.querySelector('h2').nextElementSibling);
// select the parent element of the h1 node
console.log(document.querySelector('h1').parentElement);
