const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

var whiskers = [...kittens, "Broom"];

function appendKitten(name) {
  return whiskers
}

var terminator = ["Arnold", ...kittens];

function prependKitten(name) {
  return terminator
}

var knife = kittens.slice(0, kittens.length - 1);

function removeLastKitten() {
  return knife
}

var dice = kittens.slice(1);

function removeFirstKitten() {
  return dice
}
