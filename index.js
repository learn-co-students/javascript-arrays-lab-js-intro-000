var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newKit = [...kittens, name];
  return newKit;
}

function prependKitten(name) {
  var kitKit = [name, ...kittens];
  return kitKit;
}

function removeLastKitten() {
  //removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
  var myNewKit = kittens.slice(0, kittens.length-1);
  return myNewKit;
}

function removeFirstKitten() {
  var myNewKit = kittens.slice(1);
  return myNewKit;
}
