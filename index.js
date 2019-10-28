var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function(name) {
  kittens.push(name);
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name);
}

var destructivelyRemoveLastKitten = function(name) {
  kittens.pop()
}
var destructivelyRemoveFirstKitten = function(name) {
  kittens.shift()
}

var appendKitten = function(name) {
  return kittens.concat(name)
}

var prependKitten = function(name) {
  return [name, ...kittens]
}

var removeLastKitten = function(name) {
  return kittens.slice(0, kittens.length - 1)
}

var removeFirstKitten = function(name) {
  return kittens.slice(1)
}
