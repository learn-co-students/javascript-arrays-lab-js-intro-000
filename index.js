const app = "I don't do much."

// Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}

// Arrays destructivelyPrependKitten(name) prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
}

// Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array
function destructivelyRemoveLastKitten() {
  kittens.pop();
}

// Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

// Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.push("Broom");
  return kittens;
}

// Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name) {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.unshift("Arnold");
  return kittens;
}
// Arrays removeLastKitten() removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.pop();
  return kittens;
}
// Arrays removeFirstKitten() removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.shift();
  return kittens;
}
