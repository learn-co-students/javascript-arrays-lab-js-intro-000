const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(cats) {
  kittens.push(cats)
}

function destructivelyPrependKitten(cats) {
  kittens.unshift(cats)
}

function destructivelyRemoveLastKitten(cats) {
  kittens.pop(cats)
}

function destructivelyRemoveFirstKitten(cats) {
  kittens.shift(cats)
}

function appendKitten(cats) {
  var sea = [...kittens, cats]
  return sea
}

function prependKitten(cats) {
  var sea = [cats, ...kittens]
  return sea
}

function removeFirstKitten(cats) {
  var sea = kittens.slice(1)
  return sea
}

function removeLastKitten(cats) {
  var sea = kittens.slice(0, kittens.length - 1)
  return sea
}
