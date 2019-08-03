var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens;
}

function appendKitten(name) {
  var kitten = [...kittens, name];
  return kitten;
}

function prependKitten(name) {
  var kittenP = [name, ...kittens];
  return kittenP;
}

function removeLastKitten() {
  var kittenR = kittens.slice(0, kittens.length - 1);
  return kittenR;
}

function removeFirstKitten() {
  var kittenB = kittens.slice(1);
  return kittenB;
}
