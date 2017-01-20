const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name);
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
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
    var mykittens = kittens
    mykittens = [...kittens, name]
    return mykittens
}

function prependKitten(name) {
  var mykittens = kittens
  mykittens = [name, ...kittens]
  return mykittens
}

function removeLastKitten() {
  var mykittens = kittens
  mykittens = kittens.slice(0,kittens.length - 1)
  return mykittens
}

function removeFirstKitten() {
  var mykittens = kittens
  mykittens = kittens.slice(-2)
  return mykittens
}
