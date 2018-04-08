const app = "I don't do much."

const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function appendKitten(name) {
  var n = [...kittens, name];
  return n;
}

function prependKitten(name) {
  var n = [name, ...kittens];
  return n;
}

function removeLastKitten() {
  var n = [...kittens];
  n.pop();
  return n;
}

function removeFirstKitten() {
  var n = [...kittens];
  n.shift();
  return n;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
