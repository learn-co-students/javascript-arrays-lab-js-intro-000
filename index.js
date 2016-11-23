const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var localKittens = kittens.slice();
  localKittens.push(name);
  return localKittens;
}

function prependKitten(name) {
  var localKittens = kittens.slice();
  localKittens.unshift(name);
  return localKittens;
}

function removeLastKitten() {
  var localKittens = kittens.slice();
  localKittens.pop();
  return localKittens;
}

function removeFirstKitten() {
  var localKittens = kittens.slice();
  localKittens.shift();
  return localKittens;
}
