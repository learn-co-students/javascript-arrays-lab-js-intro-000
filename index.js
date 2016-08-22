const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var new_array = [...kittens, name];
  return new_array
}

function prependKitten(name) {
  var kitten = [name, ...kittens];
  return kitten
}

function removeLastKitten() {
  var kitten = kittens.slice(0, kittens.length - 1);
  return kitten
}

function removeFirstKitten() {
  var kitten = kittens.slice(1);
  return kitten
}
