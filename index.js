const app = "I don't do much."

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens;
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  var kitten = kittens;
  kitten = [...kitten, name];
  return kitten;
}

function prependKitten(name) {
  var kitten = kittens;
  kitten = [name, ...kitten];
  return kitten;
}

function removeLastKitten() {
  var kitten = kittens;
  kitten = kitten.slice(0, kitten.length - 1);
  return kitten;
}

function removeFirstKitten() {
  var kitten = kittens;
  kitten = kitten.slice(1);
  return kitten;
}
