var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

const appendKitten = (name) => [...kittens, name]
const prependKitten = (name) => [name, ...kittens]
const removeLastKitten = () => kittens.slice(0, kittens.length - 1);
const removeFirstKitten = () => kittens.slice(1)
