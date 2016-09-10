const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
  return destructivelyAppendKitten
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
  return destructivelyPrependKitten
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return destructivelyRemoveLastKitten
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return destructivelyRemoveFirstKitten
}

function appendKitten(kitten) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(kitten)
  return kittens
}

function prependKitten(kitten) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(kitten)
  return kittens
}

function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  return kittens
}

function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  return kittens
}
