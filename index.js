const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten() {
  kittens.pop(2)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten() {
  kittens.shift(1)
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name) {
  var newarray = [...kittens, name]
  return newarray
}

var kittens = ["Milo", "Otis", "Garfield"]
function prependKitten(name) {
  var newarray = [name, ...kittens]
  return newarray
}

var kittens = ["Milo", "Otis", "Garfield"]
function removeLastKitten() {
  var newarray = kittens.slice (0, kittens.length - 1)
  return newarray
}

var kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten() {
  var newarray = kittens.slice(1)
  return newarray
}
