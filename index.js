const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kittens, (name)];
}

function prependKitten(name) {
  return [(name), ...kittens];
}

function removeLastKitten() {
  var kittens1;
  kittens1 = kittens.slice(0, -1);
  return kittens1;
}

function removeFirstKitten() {
  var kittens2
  kittens2 = kittens.slice(1);
  return kittens2;
}
