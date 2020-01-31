var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(item) {
  kittens.push(item);
}

function destructivelyPrependKitten(item) {
  kittens.unshift(item);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(item) {
  return kittens.concat(item);
}

function prependKitten(item) {
  var otro = [];
  return otro.concat(item, kittens);
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
