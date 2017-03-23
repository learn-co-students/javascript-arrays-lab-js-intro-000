const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newKittens = kittens.concat(name);
  return newKittens;
}

function prependKitten(name) {
  var newKittens = kittens.slice(0);
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten() {
  var newKittens = kittens.slice(0);
  newKittens.pop(name);
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = kittens.slice(0);
  newKittens.shift(name);
  return newKittens;
}
