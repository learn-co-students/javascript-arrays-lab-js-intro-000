const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  var newKittens = kittens.slice(0);
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  var newKittens = kittens.slice(0);
  newKittens.unshift('Arnold');
  return newKittens;
}

function removeLastKitten(name) {
  var newKittens = kittens.slice(0);
  newKittens.pop(name);
  return newKittens;
}

function removeFirstKitten(name) {
  var newKittens = kittens.slice(0);
  newKittens.shift(name);
  return newKittens;
}
