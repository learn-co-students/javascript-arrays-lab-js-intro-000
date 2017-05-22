const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  var mutArray = kittens.pop(name);
  return mutArray;
}

function destructivelyRemoveFirstKitten() {
  var mutArray = kittens.shift();
  return mutArray;
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  var removedLast = kittens.slice(0, kittens.length - 1);
  return removedLast;
}

function removeFirstKitten() {
  var removedFirst = kittens.slice(1);
  return removedFirst;
}
