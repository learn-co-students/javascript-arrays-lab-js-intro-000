var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(elm) {
  kittens.push(elm);
}

function destructivelyPrependKitten(elm) {
  kittens.unshift(elm);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(elm) {
  return [...kittens, elm];
}

function prependKitten(elm) {
  return [elm, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}