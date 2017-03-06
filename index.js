const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(element) {
  kittens.push(element)
}

var destructivelyPrependKitten = function(element) {
  kittens.unshift(element)
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop()
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift()
}

var appendKitten = function (name) {
  return [...kittens, name]
}

var prependKitten = function(name) {
  return [name, ...kittens]
}

var removeLastKitten = function() {
  return kittens.slice(0, kittens.length -1)
}

var removeFirstKitten = function() {
  return kittens.slice(1)
}
