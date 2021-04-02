var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens;
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
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

function appendKitten(kitten) {
  return [...kittens, kitten]
}

function prependKitten(kitten) {
  return [kitten, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1)
}
