var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newKitten = kittens.concat(name);
  return newKitten;
}

function prependKitten(name) {
  var newKitten = kittens.slice();
  newKitten.unshift(name);
  return newKitten;
}

function removeLastKitten() {
  var oldKitten = kittens.slice(0, -1);
  return oldKitten;
}

function removeFirstKitten() {
  var oldKitten = kittens.slice(1);
  return oldKitten;
}
