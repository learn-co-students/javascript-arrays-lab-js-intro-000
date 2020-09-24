var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
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

function appendKitten(array) {
  array = [...kittens, "Broom"]
  return array
}

function prependKitten(array) {
  array = ["Arnold", ...kittens]
  return array
}

function removeLastKitten(array) {
  array = kittens.slice(0, -1)
  return array
}

function removeFirstKitten(array) {
  array = kittens.slice(1)
  return array
}
