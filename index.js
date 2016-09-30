const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

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

function appendKitten(name) {
  var out = [...kittens,name]
  return out
}

function prependKitten(name) {
  var out = [name, ...kittens]
  return out
}

function removeLastKitten() {
  var out = kittens.slice(0,2)
  return out
}

function removeFirstKitten() {
  var out = kittens.slice(1)
  return out
}
