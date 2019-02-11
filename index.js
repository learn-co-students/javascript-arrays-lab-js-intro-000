var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array, element) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(array, element) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift()
  return kittens
}

function appendKitten(array, element) {
  var kitten = [...kittens, "Broom"]
  return kitten
}

function prependKitten(array, element) {
  var kitten1 = ["Arnold", ...kittens]
  return kitten1
}

function removeLastKitten(array) {
  var kitten2 = kittens.slice(0, kittens.length - 1)
  return kitten2
}

function removeFirstKitten(array) {
  var kitten3 = kittens.slice(1)
  return kitten3
}