const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten);
}

function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten(kitten) {
  return kittens.pop(kitten);
}

function destructivelyRemoveFirstKitten(kitten) {
  return kittens.shift(kitten);
}

function appendKitten(kitten) {
  var newKittens = [...kittens, kitten];
  return newKittens
}

function prependKitten(kitten) {
  var newKittens = [kitten, ...kittens];
  return newKittens
}

function removeLastKitten(kitten) {
  var newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}

function removeFirstKitten(kitten) {
  var newKittens = kittens.slice(1)
  return newKittens
}
