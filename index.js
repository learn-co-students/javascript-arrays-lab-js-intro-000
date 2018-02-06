const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

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
  let copy = [...kittens];
  copy.push(name);
  return copy;
}

function prependKitten(name) {
  let copy = [...kittens];
  copy.unshift(name);
  return copy;
}

function removeLastKitten() {
  let copy = [...kittens];
  copy.pop();
  return copy;
}

function removeFirstKitten() {
  let copy = [...kittens];
  copy.shift();
  return copy;
}
