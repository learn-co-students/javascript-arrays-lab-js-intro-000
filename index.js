
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens;
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kittens;
}

function destructivelyRemoveLastKitten(kitten) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(kitten) {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kittens,name];
}

function prependKitten(name) {
  return [name,...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
