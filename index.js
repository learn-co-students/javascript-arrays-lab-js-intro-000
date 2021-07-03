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

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  const newKitten = [...kittens, name];
  return newKitten;
}

function prependKitten(name) {
  const newKitten = [name, ...kittens];
  return newKitten;
}

function removeLastKitten() {
  const lastKitten = kittens.slice(0, kittens.length -1);
  return lastKitten;
}

function removeFirstKitten() {
  const firstKitten = kittens.slice(1);
  return firstKitten;
}