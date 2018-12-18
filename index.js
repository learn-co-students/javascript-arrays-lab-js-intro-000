var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array) {
  kittens.push(array)

}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten(array) {
  array = kittens
  return kittens.slice(1)
}
