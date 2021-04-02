var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(element) {
  kittens.push(element);
  return kittens;
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element);
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
  let newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  let newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  let newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

function removeFirstKitten() {
  let newKittens = kittens.slice(1, kittens.length);
  return newKittens;
}
