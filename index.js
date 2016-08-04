const app = "I don't do much."

function destructivelyAppendKitten(name) {
  // appends a kitten to the end of the kittens array
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  // prepends a kitten to the beginning of the kittens array
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  // removes the last kitten from the kittens array
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  // removes the firs tkitten from the kittens array
  return kittens.shift();
}

function appendKitten(name) {
  // appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
  var arr = [...kittens, name];
  return arr
}

function prependKitten(name) {
  // prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
  var arr = [name, ...kittens];
  return arr;
}

function removeLastKitten() {
  // removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten() {
  // removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
  return kittens.slice(1);
}
