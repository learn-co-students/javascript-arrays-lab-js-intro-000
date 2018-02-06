const app = "I don't do much."

function destructivelyAppendKitten(newKitten) {
  kittens.push(newKitten);
}

function destructivelyPrependKitten(newKitten) {
  kittens.unshift(newKitten);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(newKitten) {
  return [...kittens, newKitten]
}

function prependKitten(newKitten) {
  return [newKitten, ...kittens]
}
// new code
function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length-1);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray;
}
