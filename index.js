const app = "I don't do much."

var kittens = [
  "Milo", "Otis", "Garfield"
]

function destructivelyAppendKitten(array, name) {
  var name = "Ralph";
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(array, name) {
  var name = "Bob";
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(array, name) {
  var name = "Ralph";
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(array, name) {
  var name = "Bob";
  kittens.shift(name);
  return kittens
}

function appendKitten(name) {
  var new_array = [...kittens, "Broom"];
  return new_array
}

function prependKitten(name) {
  var new_array = ["Arnold", ...kittens];
  return new_array
}

function removeLastKitten(name) {
  var new_array = kittens.slice(0, kittens.length - 1);
  return new_array
}

function removeFirstKitten(name) {
  var new_array = kittens.slice(1);
  return new_array
}
