const app = "I don't do much."

function destructivelyAppendKitten(a) {
  kittens.push(a);
  return kittens;
}

function destructivelyPrependKitten(a) {
  kittens.unshift(a);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(a) {
  var newArray = [...kittens, a];
  return newArray;
}

function prependKitten(a) {
  var newArray = [a, ...kittens];
  return newArray;
}

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}

function removeFirstKitten() {
  var newArray = [...kittens.slice(1)];
  return newArray;
}
