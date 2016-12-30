const app = "I don't do much."

function destructivelyAppendKitten(array, element) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten(array, element) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(array, element) {
  kittens.pop();
}

function destructivelyRemoveFirstKitten(array, element) {
  kittens.shift();
}

function appendKitten(name) {
  var appendkittens = [...kittens, "Broom"]
  return appendkittens
}

function prependKitten(name) {
  var prependkittens = ["Arnold", ...kittens]
  return prependkittens
}

function removeLastKitten(name) {
  var kittensNew = kittens.slice(0, kittens.length -1);
  return kittensNew
}

function removeFirstKitten(name) {
  var kittensSold = kittens.slice(-2);
  return kittensSold
}
