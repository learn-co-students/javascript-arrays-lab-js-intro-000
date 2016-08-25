const app = "I don't do much."

//var kittens = ["Milo", "Otis", "Garfield"];

// Appends a kitten to the end of the kittens array.
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

// Prepends a kitten to the beginning of the kittens array.
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

// Removes the last kitten from the kittens array.
function destructivelyRemoveLastKitten() {
  kittens.pop(name);
  return kittens;
}

// Removes the first kitten from the kittens array.
function destructivelyRemoveFirstKitten() {
  kittens.shift(name);
  return kittens;
}

// Adds a kitten to the kittens array and returns a new array.
// Leaving the kittens array unchanged.
function appendKitten(name) {
  var newArray = kittens.push(name);
  return newArray;
}
