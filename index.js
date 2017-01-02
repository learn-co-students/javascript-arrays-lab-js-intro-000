const app = "I don't do much."

/*function addElementToBeginningOfArray(array, element) {
   return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element) {
   return  array = [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element);
   return array;
}
function accessElementInArray(array, index) {
  return (array[index]);
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}
function removeElementFromBeginningOfArray(array) {
  return array = array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}*/

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop();
}
function destructivelyRemoveFirstKitten(name) {
   kittens = kittens.slice(1);
}
function appendKitten(name) {
var newArray = [...kittens, name];
return newArray;
}
function prependKitten(name) {
var newArray = [name, ...kittens];
return newArray;
}
function removeLastKitten() {
var newArray = kittens.slice(0, kittens.length - 1);
return newArray
}
function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray;
}
