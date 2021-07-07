var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var newArray = kittens.concat(name);
  return newArray;
}

function prependKitten(name) {
  var newArray = [name].concat(kittens);
  return newArray;
}

function removeLastKitten() {
  var newArray = kittens.slice(0, -1);
  return newArray;
}

function removeLastKitten() {
  var newArray = kittens.slice(0, -1);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1)
  return newArray;
}
