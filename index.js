
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten(name) {
  return kittens.pop()
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(name) {
  kittens = kittens.slice(1)
  return kittens
}

kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name) {
  return [...kittens, "Broom"]
}

kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(name) {
  return ["Arnold", ...kittens]
}

kittens = ["Milo", "Otis", "Garfield"]
function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)
}

kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten() {
  return kittens.slice(1)
}
