const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];
var kittens2 = new Array();
var kittens3 = new Array();
var kittens4 = new Array();
var kittens5 = new Array();

var destructivelyAppendKitten = (name) => {
  kittens.push(name)
  return kittens
}

destructivelyAppendKitten(name);

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name)
  return kittens
}

destructivelyPrependKitten(name)

var destructivelyRemoveLastKitten = () => {
  kittens.pop()
  return kittens
}

destructivelyRemoveLastKitten()

var destructivelyRemoveFirstKitten = () => {
  kittens.shift()
  return kittens
}

destructivelyRemoveFirstKitten()

var appendKitten = (name) => {
  kittens2 = [...kittens, name]
  return kittens2
}

appendKitten(name)

var prependKitten = (name) => {
  kittens3 = [name, ...kittens]
  return kittens3
}

prependKitten(name)

var removeLastKitten = () => {
  kittens4 = kittens.slice(0, kittens.length - 1)
  return kittens4
}

removeLastKitten()

var removeFirstKitten = () => {
  kittens5 = kittens.slice(1)
  return kittens5
}

removeFirstKitten()
