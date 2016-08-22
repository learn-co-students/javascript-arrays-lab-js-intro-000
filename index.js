const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var array = [...kittens];
  array.push(name);
  return array;
}

function prependKitten(name) {
  var array = [...kittens];
  array.unshift(name);
  return array;
}

function removeLastKitten(array) {
  var array = [...kittens];
  array.pop();
  return array;
}

function removeFirstKitten(array) {
  var array = [...kittens];
  array.shift();
  return array;
}
