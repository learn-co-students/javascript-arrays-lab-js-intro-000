//define your array here
var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
}

function appendKitten(name) {

  var array1 = kittens
  var array2 = name
  var array3 = array1.concat(array2);
  return array3;
}

function prependKitten(name) {

  var array1 = [name]
  var array2 = kittens
  var array3 = array1.concat(array2);
  return array3;
}

function removeLastKitten() {
  var newArray = kittens.slice(0, 2);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray;
}
