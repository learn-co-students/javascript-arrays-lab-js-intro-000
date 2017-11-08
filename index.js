const app = "I don't do much."


var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(name)  {
  kittens.pop(2)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(0)
}

function appendKitten(name) {
  var newKittens = [...kittens, "Broom"]
  return newKittens;
}

function prependKitten(name)  {
  var newKittens = ["Arnold", ...kittens]
  return newKittens;
}

function removeFirstKitten(name)  {
  var newKittens = kittens.slice(1)
  return newKittens;
}

function removeLastKitten(name) {
  var newKittens = kittens.slice(0, kittens.length -1)
  return newKittens;
}
