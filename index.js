const app = "I don't do much."

//var kittens = ["Milo", "Otis", "Garfield"];

// Appends(end) a kitten to the end of the kittens array.
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

// Prepends(beginning) a kitten to the beginning of the kittens array.
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

// Removes the last kitten from the kittens array.
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

// Removes the first kitten from the kittens array.
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

// Appends(end) a kitten to the kittens array and returns a new array.
// Leaving the kittens array unchanged.
function appendKitten(name) {
  var lastKitten = [...kittens, name];
  return lastKitten;
}

// Prepends(beginning) a kitten to the kittens array and returns a new array.
// Leaving the kittens array unchanged.
function prependKitten(name) {
  var firstKitten = [name, ...kittens];
  return firstKitten;
}

// Remove the last kitten in the kittens array and returns a new array,
// leaving the kittens array unchanged.
function removeLastKitten() {
  var lastKitten = kittens.slice(0, kittens.length - 1);
  return lastKitten;
}

// Remove the first kitten from the kittens array and return a new array,
// leaving the kittens array unchange.
function removeFirstKitten() {
  var firstKitten = [...kittens.slice(1)];
  return firstKitten;
}
