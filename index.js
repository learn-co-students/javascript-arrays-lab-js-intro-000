var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
var kitty = "Ralph"
var kitty2 = "Bob"
// Add your functions and code here
function destructivelyAppendKitten() {
  kittens.push(kitty);
  return kittens;
}

function destructivelyPrependKitten() {
  kittens.unshift(kitty2);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop(kitty);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(kitty);
  return kittens;
}

function appendKitten(kitty) {
  return [...kittens, kitty];
}

function prependKitten(kitty) {
  return [kitty, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
