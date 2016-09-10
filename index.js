const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = function (name) {
  kittens = [...kittens, name];
  return kittens
}

var destructivelyPrependKitten = function (name) {
  kittens = [name, ...kittens];
  return kittens
}

var destructivelyRemoveLastKitten = function () {
  kittens = kittens.slice(0, kittens.length -1);
  return kittens
}

var destructivelyRemoveFirstKitten = function () {
  kittens = kittens.slice(1);
  return kittens
}

var appendKitten = function (name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.push(name);
  return kittens
}

var prependKitten = function (name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift(name)
  return kittens
}

var removeLastKitten = function () {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop()
  return kittens
}

var removeFirstKitten = function () {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift()
  return kittens
}
