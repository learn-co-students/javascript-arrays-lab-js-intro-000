const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return destructivelyAppendKitten
};

function appendKitten(kitten) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(kitten)
  return kittens
};

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
  return kittens
};

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten(kitten) {
  kittens.pop(kitten)
  return kittens
};

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(kitten) {
  kittens.shift(kitten)
  return kittens
};

var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(kitten) {
  return [kitten, ...kittens]
};

var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten(kitten) {
  return kittens.slice(0, kittens.length -1)
};

var kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten(kitten) {
  return kittens.slice(1)
};
