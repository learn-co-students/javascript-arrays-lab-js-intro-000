const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name) {
  var newKittens = kittens.slice()
  newKittens.push(name)
  return newKittens
}

function prependKitten(name) {
  var newKittens = kittens.slice()
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten(name) {
  var newKittens = kittens.slice(0, kittens.length-1)
  return newKittens
}

function removeFirstKitten(name) {
  var newKittens = kittens.slice(1)
  return newKittens
}
