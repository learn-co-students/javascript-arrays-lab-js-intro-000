// define kittens array
var kittens = ['Milo', 'Otis', 'Garfield'];

// modifies kittens array by appending an item to the end of it
function destructivelyAppendKitten(newKitten) {
  kittens.push(newKitten);
  return kittens;
}

// modifies kittens array by prepending an item to the beginning of it
function destructivelyPrependKitten(newKitten) {
  kittens.unshift(newKitten);
  return kittens;
}

// modifies kittens array by removing its last item
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

// modifies kittens array by removing its first item
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

// appends an item to the end of kittens array without modifying it
function appendKitten(newKitten) {
  return kittens.concat(newKitten);
}

// prepends an item to the beginning of kittens array without modifying it
function prependKitten(newKitten) {
  return [newKitten].concat(kittens);
}

// removes the last item from kittens array without modifying it
function removeLastKitten() {
  return kittens.slice(0,kittens.length - 1);
}

// removes the first item from kittens array without modifying it
function removeFirstKitten() {
  return kittens.slice(1);
}
