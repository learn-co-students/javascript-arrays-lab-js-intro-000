var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
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
  var newArray = []
  var modifiedKittens = kittens.concat(newArray)
  modifiedKittens.push(name)
  return modifiedKittens
}

function prependKitten(name) {
  var newArray = []
  var modifiedKittens = kittens.concat(newArray)
  modifiedKittens.unshift(name)
  return modifiedKittens
}

function removeLastKitten() {
  var modifiedKittens = kittens.slice(0, kittens.length - 1)
  return modifiedKittens
}

function removeFirstKitten() {
  var modifiedKittens = kittens.slice(1)
  return modifiedKittens
}
