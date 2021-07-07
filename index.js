var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
