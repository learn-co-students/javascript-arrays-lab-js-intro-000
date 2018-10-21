var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  kittens.push('Ralph');
}

function destructivelyPrependKitten(Bob) {
  kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(Broom) {
  return kittens.concat(Broom);
}

function prependKitten(Arnold) {
  return ['Arnold', ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, 2);
}

function removeFirstKitten() {
  return kittens.slice(-2);
}
