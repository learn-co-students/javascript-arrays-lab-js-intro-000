const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var kittensAppend = [...kittens, "Broom"];
  return kittensAppend;
}

function prependKitten(name) {
  var kittensPrepend = ["Arnold", ...kittens];
  return kittensPrepend;
}

function removeLastKitten() {
  var kittenRemove = kittens.slice(0, 2);
  return kittenRemove;
}

function removeFirstKitten() {
  var kittenFirst = kittens.slice(1);
  return kittenFirst;
}
