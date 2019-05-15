var kittens = [
  "Milo",
  "Otis",
  "Garfield"
] //define your array here

// Add your functions and code here
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
  return kittens.concat(name);
}

function prependKitten(name) {
  const newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  const lessKittens = kittens.slice(0,2);
  return lessKittens;
}

function removeFirstKitten() {
  const firstKittenGone = kittens.slice(1);
  return firstKittenGone;
}
