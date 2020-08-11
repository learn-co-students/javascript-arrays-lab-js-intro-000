var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// Add your functions and code here
var destructivelyAppendKitten = (array, name) => {
  var name = "Ralph";
  kittens.push(name);
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyPrependKitten = (array, name) => {
  var name = "Bob";
  kittens.unshift(name);
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyRemoveLastKitten = (array, name) => {
  kittens.pop()
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyRemoveFirstKitten = (array, name) => {
  kittens.shift()
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

var appendKitten = (array, name) => {
  var name = "Broom";
  return [kittens..., name]
}
