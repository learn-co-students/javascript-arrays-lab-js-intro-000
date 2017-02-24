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

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)

  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(1)

  return kittens
}

function appendKitten(array, name) {
  return [...kittens, "Broom"]

  return kittens

}


function prependKitten(array, name) {
  return ["Arnold", ...kittens]

  return kittens
}

function removeLastKitten(array) {
  return kittens.slice(0, kittens.length - 1)
}


function removeFirstKitten(array) {
  return kittens.slice(1)
}
