var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
};
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
};
function destructivelyRemoveLastKitten() {
  kittens.pop();
};
var destructivelyRemoveFirstKitten = () => kittens.shift();
function appendKitten(name) {
  var newArray = [...kittens,name];
  return newArray;
}
var prependKitten = (name) => [name,...kittens];
function removeLastKitten() {
  return kittens.slice(0,kittens.length-1);
}
var removeFirstKitten = () => kittens.slice(1);
