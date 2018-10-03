// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens
}

kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  return [...kittens, name]
  }

kittens = ["Milo", "Otis", "Garfield"]


function prependKitten(name) {
  return [name, ...kittens]
}

kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten(name) {
  return kittens.slice(0,kittens.length-1);
}

kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten(name) {
  return kittens.slice(1);
}
